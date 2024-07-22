Task Manager Application
=========================

Overview
--------
The Task Manager application is a full-stack web application designed to help users manage their tasks efficiently. The backend is built using Spring Boot, and the frontend is developed using React.js. The application allows users to create, read, update, and delete tasks, as well as search for tasks based on different criteria.

Backend Setup
-------------
1. Ensure you have Java and Maven installed on your machine.
2. Clone the backend repository from GitHub:
   `git clone https://github.com/khooch01/Task-Manager.git`
3. Navigate to the project directory:
   `cd Task-Manager`
4. Install the required dependencies and build the project:
   `mvn clean install`
5. Run the Spring Boot application:
   `mvn spring-boot:run`
6. The backend API will be accessible at:
   `http://localhost:8080/api/tasks`

Frontend Setup
--------------
1. Ensure you have Node.js and npm (Node Package Manager) installed on your machine.
2. Clone the frontend repository from GitHub:
   `git clone https://github.com/khooch01/task-manager-frontend.git`
3. Navigate to the project directory:
   `cd task-manager-frontend`
4. Install the required dependencies:
   `npm install`
5. Start the React development server:
   `npm start`
6. The frontend application will be accessible at:
   `http://localhost:3000`

Configuration
-------------
To ensure proper communication between the frontend and backend, CORS (Cross-Origin Resource Sharing) must be configured. The backend's CORS settings are managed in the `WebConfig` class located at `src/main/java/com/khooch/taskmanager/configuration/WebConfig.java`. The configuration should allow requests from `http://localhost:3000`.

Features
--------
1. **Task List**: View a list of all tasks.
2. **Create Task**: Add new tasks with a title, description, category, and priority.
3. **Edit Task**: Update existing tasks.
4. **Delete Task**: Remove tasks from the list.
5. **Search Task**: Search for tasks by title, description, category, or priority.

File Structure
--------------
- **backend**: Contains the Spring Boot application.
  - `src/main/java/com/khooch/taskmanager`: Main application package.
  - `src/main/java/com/khooch/taskmanager/configuration`: CORS configuration.
  - `src/main/java/com/khooch/taskmanager/controller`: REST API controllers.
  - `src/main/java/com/khooch/taskmanager/entity`: JPA entities.
  - `src/main/java/com/khooch/taskmanager/repository`: JPA repositories.
  - `src/main/java/com/khooch/taskmanager/service`: Service layer.

- **frontend**: Contains the React application.
  - `src/components`: React components.
  - `src/pages`: Page components.
  - `src/context`: Context for state management.
  - `src/taskApi.js`: API functions for communication with the backend.

Usage
-----
1. **Create a Task**: Enter the task details in the "Create Task" section and click "Create".
2. **Edit a Task**: Click the "Edit" button next to a task, modify the details, and click "Save".
3. **Delete a Task**: Click the "Delete" button next to a task.
4. **Search Tasks**: Use the search bar to filter tasks based on title, description, category, or priority.

Troubleshooting
---------------
- **Network Errors**: Ensure both the backend and frontend servers are running. Check the Developer Tools in your browser (F12) for network request details.
- **Backend Issues**: Verify the backend API endpoints are working correctly using Postman or a similar tool.
- **Frontend Issues**: Check the console logs in the browser for any error messages.

Contact
-------
For any questions or issues, please contact the project maintainer at [your-email@example.com].

