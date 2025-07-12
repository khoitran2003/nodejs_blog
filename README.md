# Node.js Blog

A simple blog application built with Node.js, Express, and MongoDB. This project is for learning and demonstration purposes.

## Features

- Create, Read, Update, and Delete (CRUD) operations for courses.
- User-friendly interface with server-side rendering using Handlebars.
- SEO-friendly URLs with mongoose-slug-updater.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Templating Engine:** Express Handlebars
- **Styling:** SCSS/SASS
- **Development:** Nodemon for live reloading, Prettier for code formatting.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local instance or a cloud-based solution like MongoDB Atlas)

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/khoitran2003/nodejs_blog.git
    cd nodejs_blog
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a file named `.env.local` in the root of the project and add your MongoDB connection string:

    ```
    MONGO_URI=your_mongodb_connection_string
    ```

    Replace `your_mongodb_connection_string` with your actual MongoDB URI.

4.  **Run the application:**

    The project uses two main scripts: one for the server and one for watching SCSS files.
    - **Start the server (with auto-reload):**

      ```bash
      npm start
      ```

      The server will start on a port specified in your setup (or a default, typically 3000) and can be accessed at `http://localhost:3000`.

    - **Watch for SCSS changes:**

      Open a separate terminal and run:

      ```bash
      npm run watch
      ```

      This will compile `app.scss` to `app.css` whenever you make changes.

## Project Structure

```
.
├── src
│   ├── app
│   │   ├── controllers   # Handles request logic
│   │   ├── models        # Mongoose schemas
│   ├── config
│   │   └── db            # Database connection setup
│   ├── public            # Compiled CSS, images
│   ├── resources
│   │   ├── scss          # SASS/SCSS files
│   │   └── views         # Handlebars templates
│   ├── routes            # Express routes
│   └── main.js           # Application entry point
├── .gitignore
├── package.json
└── README.md
```
