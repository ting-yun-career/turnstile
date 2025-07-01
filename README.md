# Turnstile Demo

This project demonstrates the integration of Cloudflare Turnstile with a React application.

## Installation

To get started with the project, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/ting-yun-career/turnstile.git
    cd turnstile
    ```

2.  **Install dependencies:**

    ```bash
    yarn install
    ```

3.  **Create a .env file:**
    Create a file named `.env` in the root of the project and add your Cloudflare Turnstile site key:
    ```
    VITE_TURNSTILE_SITE_KEY="YOUR_SITE_KEY"
    ```
    (Replace "YOUR_SITE_KEY" with your actual Turnstile site key from the Cloudflare dashboard.)

## Running Locally

To run the project in development mode:

```bash
yarn dev
```

This will start the development server, and you can view the application in your browser at `http://localhost:5173/`.
