# **Know Your Neighborhood**
Welcome to the Know Your Neighborhood project! This project aims to create a comprehensive web application that allows users to connect with their local community by providing essential information and fostering community engagement.

## **Table of Contents**
- Introduction
- Features
- Technologies Used
- Installation
- Usage
- Project Structure
- Contributing
- License

## **Introduction**
The Know Your Neighborhood application provides a platform for residents to access and share information about their local area. Users can log in using Auth0, view and update their profiles, and access various community resources.

## **Features**
- **User Authentication and Authorization :** Secure login and registration using Auth0, with options for social login.
- **Home Page:** Personalized greetings and quick access to key pages like Contact Us, About Us, and Terms and Conditions.
- **Profile Management: **View and update profile information securely.
- ** Community Information:** Access local events, services, and important contacts.
- **Secure Logout: **Proper termination of user sessions.

## **Technologies Used**
- **Frontend:** React.js
- **Backend:** Spring Boot
- **Authentication:** Auth0
- **Deployment:** ngrok for secure tunneling

## Installation
Clone the repository:

```bash
git clone https://github.com/khooch01/TaskManager.git
cd TaskManager/know-your-neighborhood
```
Install dependencies:

```bash
npm install
```

Set up Auth0:
- Create an Auth0 account and set up a new application.
- Configure your application settings and obtain the domain and client ID.
- Set the allowed callback URL and logout URL to the appropriate ngrok URL (e.g., https://your-ngrok-url.ngrok-free.app).

Update environment variables:

Create a .env file in the root directory and add the following:

```
REACT_APP_AUTH0_DOMAIN=your-auth0-domain
REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
```
Update ngrok URL:

- Open src/App.js and update the redirectUri in the Auth0Provider to your ngrok URL.
- Open src/pages/IndexPage.js and update the redirectUri in the login function to your ngrok URL.

## Usage
Start the development server:

```bash
npm start
```
Open your browser and navigate to http://localhost:3000.

Register or log in using the Auth0 authentication system.

## **Project Structure**

java
TaskManager/
├── know-your-neighborhood/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   ├── .env
│   ├── package.json
│   ├── README.md

## **Contributing**
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Create a pull request.

## **License**
This project is licensed under the MIT License. See the LICENSE file for details.

Note: When using this code, make sure to change the ngrok URL in src/App.js and src/pages/IndexPage.js to your own ngrok URL to ensure proper redirection during authentication. And also ensure on [Auth0](https://manage.auth0.com/ "Auth0") enter the url follow by the table.

| Name  | URL  |
| ------------ | ------------ |
| Application Login Url | https://your-ngrok-app/login  |
| Allowed Callback Url | https://your-ngrok-app/home   |
|  Allowed Logout Url | https://your-ngrok-app/logout   |
| Allowed Web Origin  | https://your-ngrok-app  |
