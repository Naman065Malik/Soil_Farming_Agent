# Soil Farming Agent
## _Ineuron Internship Project_

The Soil Farming Agent project is a web-based platform developed using Node.js, Express.js, and MongoDB. It aims to provide farmers and agricultural stakeholders with easy access to comprehensive soil information and connect them with soil distributors. The project offers soil characteristics, fertility reports, and personalized crop recommendations, enhancing agricultural productivity and promoting sustainable farming practices.

## Features

- User Authentication: Secure user registration and login system with JWT-based authentication.
- Soil Information: Access detailed soil characteristics and fertility reports.
- Distributor Listings: Explore a catalog of soil distributors and their products.
- Personalized profiles: Update Your profile according to you.

## Installation

- Clone the repository: git clone https://github.com/yourusername/soil-farming-agent.git
- Install dependencies: npm install
- Start the server: npm run server
- Open http://localhost:8000 in your web browser to access the application.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- Multer for File Upload

## File Structure
- src: Contains the source code for the application.
    - models: Contains Mongoose models for data schema and interactions with MongoDB.
    - routes: Defines Express.js routes and route-specific middleware.
    - middlewares: Houses custom middleware, including authentication and File Upload.
- public: Static assets like CSS and client-side JavaScript.
    - css : Contains Further 3 Folders to Contain css files for User Panel, Admin Panel, Registration Pages Respectively
    - js: Contains all Static JavaSript Files
    - images: Contains all images.
        - img: Contains all static image assets used in our website.
        - profiles: Contain Profile Pictures of All Users.
        - soils: Contain Images of All the Soils Saved in our System.
        - distributors: Contain Images of All the Distributors Saved in our System.
    
- views: Contains the HBS templates for rendering dynamic HTML pages.

## How to Contribute
1. Fork the repository.
2. Create a new branch for your feature/fix: `git checkout -b my-feature`.
3. Commit your changes: `git commit -m "Added new feature"`.
4. Push to the branch: `git push origin my-feature`.
5. Create a pull request.

## 📩 Documentation

[High Level Document](Documentation/High_Level_Document.pdf)

[Low Level Document](Documentation/Low_Level_Document.pdf)

[Architecture](Documentation/Architecture.pdf)

[WireFrame](Documentation/Wireframe.pdf)

[Report](Documentation/Project_Report.pdf)

## Authors
#### Naman Malik
- **Skills:** JavaScript, Node.js, Express.js, MongoDB
- **Social Media:** [LinkedIn](https://www.linkedin.com/in/namanmalik18), [GitHub](https://github.com/Naman065Malik)

#### Tanmay Sharma
- **Skills:** HTML, CSS, JavaScript
- **Social Media:** [LinkedIn](https://www.linkedin.com/in/tanmay-sharma2903), [GitHub](https://github.com/Tanmay-vats-sharma)

> Feel free to add more authors and update their information as needed. The README file provides essential information about the project, its features, installation instructions, technologies used, and how to contribute, making it easier for users and contributors to understand and engage with your project repository.

