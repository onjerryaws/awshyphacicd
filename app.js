const express = require('express');
const app = express();
const port = 3000; // The port your application will run on

// You can still update this version number for your deployments
const version = '4.0';

app.get('/', (req, res) => {
    // The entire HTML page with embedded CSS is sent as the response
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deployment v${version} by Jerry</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #00BFFF; /* DeepSkyBlue */
            --glow-color: rgba(0, 191, 255, 0.7);
            --bg-color: #1a1a1a;
            --font-family: 'Roboto Mono', monospace;
        }

        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: var(--bg-color);
            color: var(--primary-color);
            font-family: var(--font-family);
            overflow: hidden; /* Hide scrollbars for a clean look */
        }

        /* Techy animated grid background */
        body::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 25px 25px;
            z-index: -1;
            animation: moveGrid 15s linear infinite;
        }
        
        @keyframes moveGrid {
            from { background-position: 0 0; }
            to { background-position: 25px 25px; }
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            height: 100%;
            width: 100%;
            padding: 1rem;
            box-sizing: border-box;
        }

        .message {
            font-size: 5vw; /* Responsive font size based on viewport width */
            font-weight: 400;
            text-shadow: 0 0 5px var(--glow-color), 0 0 10px var(--glow-color), 0 0 15px var(--glow-color);
            animation: flicker 3s infinite alternate;
            border: 1px solid var(--primary-color);
            padding: 1.5rem 2.5rem;
            box-shadow: 0 0 25px var(--glow-color) inset, 0 0 15px var(--glow-color);
        }
        
        /* Media queries for responsiveness */
        /* Prevents font from becoming too large on desktops */
        @media (min-width: 1200px) {
            .message {
                font-size: 60px;
            }
        }
        /* Increases font size for better readability on phones */
         @media (max-width: 600px) {
            .message {
                font-size: 8vw;
                padding: 1rem 1.5rem;
            }
        }

        .heart {
            display: inline-block;
            animation: pulse 1.5s infinite ease-in-out;
        }

        /* Pulsing animation for the heart emoji */
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
        }
        
        /* Flickering animation for the text glow */
        @keyframes flicker {
          0%, 18%, 22%, 25%, 53%, 57%, 100% {
              text-shadow:
              0 0 4px var(--glow-color),
              0 0 11px var(--glow-color),
              0 0 19px var(--glow-color),
              0 0 40px var(--primary-color),
              0 0 80px var(--primary-color);
          }
          20%, 24%, 55% {       
              text-shadow: none;
              box-shadow: none;
          }
        }

    </style>
</head>
<body>
    <div class="container">
        <h1 class="message">Made by Jerry with love <span class="heart">❤️</span></h1>
    </div>
</body>
</html>
    `);
 
  // Your original logging remains unchanged
  console.log(`[Version ${version}]: New request from ${req.ip} for URL: ${req.url}`);
});

app.listen(port, () => {
    // The server will now listen on all available network interfaces, not just localhost
    console.log(`[Version ${version}]: Server running on port ${port}`);
});
