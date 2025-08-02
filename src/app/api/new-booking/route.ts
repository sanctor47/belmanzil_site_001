import { NextRequest, NextResponse } from "next/server";

// Define a type for the incoming request body for better type safety.
type ContactFormPayload = {
    name: string;
    email: string;
    phone: string;
    complaint: string;
    address?: string;
    notes?: string;
    preferredTime?: string;
    gaClientId?: string;
};

// Define the structure for the external API request.
type ExternalApiPayload = {
    patient_name: string;
    patient_email: string;
    patient_phone: string;
    patient_address: string;
    chief_complaint: string;
    patient_notes: string;
    preferred_call_time: string;
    ga_client_id: string;
};

export async function POST(request: NextRequest) {
    // 1. Validate that the backend URL is configured on the server.
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl) {
        console.error("Error: BACKEND_URL environment variable is not set.");
        return NextResponse.json(
            { message: "Server configuration error." },
            { status: 500 }
        );
    }

    try {
        // 2. Parse and type the incoming request body.
        const body: ContactFormPayload = await request.json();
        console.log('Received Request Body:', body);

        // 3. Use destructuring for cleaner access to body properties.
        const { name, email, phone, complaint, gaClientId } = body;

        // 4. Validate required fields.
        if (!name || !email || !phone || !complaint) {
            return NextResponse.json(
                { message: "Missing required fields: name, email, phone, complaint." },
                { status: 400 }
            );
        }

        if (gaClientId) {
            console.log('Google Analytics Client ID:', gaClientId);
        } else {
            console.warn('Google Analytics Client ID not provided');
        }

        // 5. Map the frontend data to the external API's expected structure.
        const apiPayload: ExternalApiPayload = {
            patient_name: name,
            patient_email: email,
            patient_phone: phone,
            chief_complaint: complaint,
            patient_address: body.address || '',
            patient_notes: body.notes || '',
            preferred_call_time: body.preferredTime || '',
            ga_client_id: gaClientId || ''
        };

        // 6. Send the request to your backend service.
        const response = await fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any necessary auth headers here, e.g., 'Authorization': `Bearer ${process.env.API_KEY}`
            },
            body: JSON.stringify(apiPayload)
        });

        // // 7. **CRITICAL FIX**: Correctly handle the response from the external API.
        // if (!response.ok) {
        //     // If the external API returned an error (e.g., 4xx, 5xx), forward an error.
        //     const errorData = await response.text(); // Get more details from the failed response
        //     console.error('External API request failed:', response.status, errorData);
        //     return NextResponse.json(
        //         { message: 'Failed to submit data to the backend service.' },
        //         { status: response.status } // Use the status from the failed response.
        //     );
        // }

        // If the external API call was successful, return a success response to the client.
        return NextResponse.json({
            message: 'Data submitted successfully!',
            data: body // Optionally forward data from the backend response.
        });

    } catch (error: any) {
        // Handle errors from parsing JSON or network issues with fetch.
        console.error('Error processing request:', error);
        return NextResponse.json(
            { message: 'An unexpected error occurred.', error: error.message },
            { status: 500 }
        );
    }
}