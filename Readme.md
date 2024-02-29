Certainly! Here is an updated README with the JWT authentication included:

```markdown
# Nextjs Full Stack with JWT Authentication

## Next.js Full Stack Project with MySQL, Sequelize, Axios, MUI, Bcrypt, Body-parser, Cors, and JWT Authentication

### Overview

This project is a full-stack web application built using Next.js, MySQL, Sequelize, Axios, MUI (Material-UI), Bcrypt, Body-parser, Cors, and JWT (JSON Web Token) Authentication. It serves as a foundation for creating robust and scalable web applications with a modern tech stack and secure user authentication.

### Features

- **Next.js:** A React-based framework for building server-side rendered and statically generated web applications.
- **MySQL:** A relational database management system used for storing and managing data.
- **Sequelize:** An ORM (Object-Relational Mapping) library for Node.js, simplifying database interactions.
- **Axios:** A promise-based HTTP client for making HTTP requests, facilitating communication between the frontend and backend.
- **MUI (Material-UI):** A React UI framework that provides a set of customizable components following Google's Material Design principles.
- **Bcrypt:** A library for hashing passwords, enhancing security by protecting sensitive user data.
- **Body-parser:** Middleware for parsing incoming request bodies in a Node.js application.
- **Cors:** Middleware for enabling Cross-Origin Resource Sharing, allowing controlled access to resources from different domains.
- **JWT (JSON Web Token) Authentication:** Secure user authentication using JWT.

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js and npm
- MySQL
- Any code editor (e.g., Visual Studio Code)

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-nextjs-project.git
cd your-nextjs-project
```

2. Install dependencies:

```bash
npm install
```

3. Configure the database connection in the `config/config.json` file.

4. Run migrations to set up the database:

```bash
npx sequelize-cli db:migrate
```

5. Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your application.

### JWT Authentication

JWT authentication has been included in the project for secure user authentication. The authentication routes can be found in the `api/auth.js` file. User credentials are verified, and a JWT token is provided upon successful login.

### Project Structure

- **`pages/`:** Contains Next.js pages for routing and rendering.
- **`components/`:** Reusable React components.
- **`api/`:** Backend API routes, including JWT authentication.
- **`models/`:** Sequelize models for defining database tables and relationships.
- **`config/`:** Configuration files for the database, JWT, and other settings.
- **`public/`:** Static assets.

### Contribution

Feel free to contribute to this project by opening issues or submitting pull requests. Please follow the [contribution guidelines](CONTRIBUTING.md).
```

Copy and paste this README into your project to inform others that JWT authentication has been included.
