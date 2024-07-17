# Task Management Application

## Objective

The Task Management Application is designed to streamline task handling within a team. The application enables users to add, edit, delete, and list tasks. Each task contains a title, description, and status (e.g., "To Do", "In Progress", "Done"). The app supports user roles, including Admin, Manager, and User, with specific functionalities and permissions.

## Features

### User Roles:
- **Admin**:
  - Can delete tasks and manage users.
  - Can add, edit, and delete users.
- **Manager**:
  - Can create, edit, and assign tasks to users under their supervision.
  - Cannot edit tasks after they are marked as "Done".
- **User**:
  - Can view tasks assigned to them and mark tasks as "Done" or "Need Details".

### Task Management:
- Add, edit, delete, and list tasks.
- Assign tasks to users.
- Task statuses: "To Do", "In Progress", "Done".

### User Management:
- Admin can create and manage users.
- Assign users to managers.

### Forms:
- **Login Form**: For user authentication (username & password).
- **User Form**: Accessible only by Admin to manage users.
- **Tasks Form**: Accessible by Managers to create and assign tasks.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- Angular CLI installed globally.

### Installation

1. **Clone the repository:**
   git clone https://github.com/AsemAdel98/tmfe01.git
   cd tmfe01

2. **Install dependencies:**
   npm install
   

3. **Run the application:**
   ng serve
   
## Usage
Login
Users must log in using their username and password.

- **Admin Dashboard:**
Admins can access the user management form to create and manage user accounts. They have the ability to add, edit, and delete users.

- **Manager Dashboard:**
Managers can create, edit, and assign tasks to users. They can also see all tasks assigned to their team members. However, they cannot edit tasks that have been marked as "Done" by the users.

- **User Dashboard:**
Users can view tasks assigned to them and update the status of their tasks to "Done" or "Need Details".

### Styling and Design
The application is designed with basic styling to ensure a visually appealing and responsive interface.

### Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

### Sample Users
- Asem Adel (admin@info.co, password: 12345678) - Admin
- Mahmoud Medhat (manager@info.co, password: 12345678) - Manager
- Mohamed Salah (user@info.co, password: 12345678) - User
- Amr Adel (amr.adel@info.co, password: 12345678) - User
