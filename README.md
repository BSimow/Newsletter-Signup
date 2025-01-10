# Newsletter Signup Application

This is a Node.js web application that allows users to sign up for a newsletter using the Mailchimp API. It features a user-friendly signup form styled with Bootstrap and handles form data using Express and Body-Parser.

## Features

- **User Interface**: Responsive signup form built with HTML, CSS, and Bootstrap.
- **Backend Integration**: Node.js and Express server handling HTTP requests.
- **Mailchimp Integration**: Adds subscribers to a Mailchimp mailing list.
- **Error Handling**: Displays success or failure pages based on the signup result.

## Technologies Used

- Node.js
- Express.js
- Body-Parser
- HTTPS Module
- Bootstrap 5
- Mailchimp API

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/newsletter-signup.git
   cd newsletter-signup
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your Mailchimp API key and List ID:
   ```bash
   API_KEY=your-mailchimp-api-key
   LIST_ID=your-mailchimp-list-id
   ```

4. **Run the Application**
   ```bash
   node app.js
   ```
   The application will run on `http://localhost:3000`.

## Usage

1. Open `http://localhost:3000` in your browser.
2. Enter your first name, last name, and email address.
3. Click **Sign in** to subscribe.
4. You will see a success or failure message based on the result.

## Project Structure

```
newsletter-signup/
├── public/
│   └── css/
│       └── styles.css
├── images/
│   └── logo.svg
├── signup.html
├── success.html
├── failure.html
├── app.js
├── package.json
└── README.md
```

## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **body-parser**: Middleware to parse incoming request bodies.
- **https**: Node.js module for making HTTPS requests.

## Security Note

**Important:** Do not hardcode sensitive information (like API keys) in the code. Use environment variables instead.

## Author

Developed by **Mohamed Elgohary**

---

Feel free to contribute by submitting issues or pull requests!

