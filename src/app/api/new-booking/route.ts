import { NextRequest, NextResponse } from "next/server";

// Received Request Body: {
//   name: 'Aser Nabil',
//   email: 'test2@test.com',
//   phone: '+201066972307',
//   complaint: '85685856',
//   preferredTime: 'afternoon'
// }

    // Request Body Structure:
	// PatientName    string `json:"patient_name"`
	// PatientEmail   string `json:"patient_email"`
	// PatientPhone   string `json:"patient_phone"`
	// PatientAddress string `json:"patient_address"`
	// ChiefComplaint string `json:"chief_complaint"`
	// PatientNotes   string `json:"patient_notes,omitempty"`

export async function POST(request: NextRequest) {
    try {
        // The request body is a ReadableStream. The .json() method reads the stream
        // to completion and parses the result as JSON.
        const body = await request.json();

        // Log the parsed body to the server-side console.
        // When you run your Next.js app, this log will appear in the terminal.
        console.log('Received Request Body:', body);

        // You can perform any necessary server-side logic here,
        // such as validation, database operations, etc.

        if(!body.name || !body.email || !body.phone || !body.complaint) {
            // If required fields are missing, return a 400 Bad Request response.
            return NextResponse.json({
                message: 'Missing required fields'
            }, { status: 400 });
        }

        // Send a request to an external API or perform other operations as needed.
        const response = await fetch('https://admin.sudotechs.com/api/public/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                patient_name: body.name,
                patient_email: body.email,
                patient_phone: body.phone,
                patient_address: body.address || '', // Optional field
                chief_complaint: body.complaint,
                patient_notes: body.notes || '' // Optional field
            })
        });

        // Send a JSON response back to the client confirming receipt of the data.
        return NextResponse.json({
            message: 'Data received successfully!',
            receivedData: body
        });

    } catch (error: any) {
        // Log any errors that occur during the process.
        console.error('Error processing request:', error);

        // Return a 500 Internal Server Error response if something goes wrong.
        return NextResponse.json({
            message: 'Error processing request',
            error: error.message
        }, { status: 500 });
    }
}
