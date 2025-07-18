## Install Nodejs and Yarn
To install Node.js and Yarn, you can use the following commands:

```bash
curl -sL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g yarn
```

## Clone the Repository
Clone the repository to your server:
```bash
git clone https://github.com/yourusername/belmanzil.git
cd belmanzil
```
## Install Dependencies
Navigate to the cloned directory and install the dependencies:
```bash
yarn install
```

## Build the Application
Build the Next.js application:
```bash
yarn build
```

## Start the Application
You can start the application using:
```bash
yarn start
```

## Setup Systemd Service
To run your Next.js application as a service, you can create a systemd service file.

Create a new service file for your application:
```bash
sudo nano /etc/systemd/system/belmanzil.service
```

Add the following content to the service file:

```ini
[Unit]
Description=Belmanzil Next.js App
After=network.target

[Service]
# User and Group to run the app as
# Running as root is generally not recommended for security reasons.
# Consider creating a dedicated user for the application.
User=root
Group=root

# The directory where your app is located
WorkingDirectory=/root/belmanzil_site_001

# Set the production environment
Environment="NODE_ENV=production"

# The command to start the app using yarn
# Using the full path to the 'yarn' executable
ExecStart=/usr/bin/yarn start

# Automatically restart the app if it crashes
Restart=always
RestartSec=10

# Standard output and error logging
StandardOutput=journal
StandardError=journal

# Specifies the syslog identifier
SyslogIdentifier=belmanzil-nextjs

[Install]
WantedBy=multi-user.target

```

```bash
sudo nano /etc/systemd/system/belmanzil.service
```

## Enable and Start the Service
Enable the service to start on boot and then start it:
```bash
sudo systemctl daemon-reload
sudo systemctl enable belmanzil.service
sudo systemctl start belmanzil.service
```

## Check Service Status
You can check the status of your service with:
```bash
sudo systemctl status belmanzil.service
```

## View Logs
To view the logs of your application, you can use:
```bash
sudo journalctl -u belmanzil.service
```

### Install Caddy
To install Caddy, you can use the following commands:

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

## Configure Caddy

```bash
sudo nano /etc/caddy/Caddyfile
```

Add the following content to the Caddyfile:

```caddyfile

belmanzil.com, www.belmanzil.com {

    reverse_proxy localhost:3000

}
```

Replace `belmanzil.com` with your actual domain name.

```bash
sudo systemctl restart caddy
```
