import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }
  getTasks() {
    return [
      {
        "id": 1,
        "task_refrance": 2553165655,
        "title": "Develop authentication module",
        "assigned_to": {
          "id": 3,
          "first_name": "Asem",
          "last_name": "Adel",
          "avatar": "../../../../assets/imgs/user-avatar/16.png"
        },
        "description": "Implement login and registration functionality",
        "status": "toDo"
      },
      {
        "id": 2,
        "task_refrance": 2553165656,
        "title": "Design dashboard UI",
        "assigned_to": {
          "id": 3,
          "first_name": "Asem",
          "last_name": "Adel",
          "avatar": "../../../../assets/imgs/user-avatar/16.png"
        },
        "description": "Create the layout for the admin dashboard",
        "status": "toDo"
      },
      {
        "id": 3,
        "task_refrance": 2553165657,
        "title": "Integrate payment gateway",
        "assigned_to": {
          "id": 3,
          "first_name": "Asem",
          "last_name": "Adel",
          "avatar": "../../../../assets/imgs/user-avatar/16.png"
        },
        "description": "Add Stripe and PayPal integration",
        "status": "inProgress"
      },
      {
        "id": 4,
        "task_refrance": 2553165658,
        "title": "Optimize database queries",
        "assigned_to": {
          "id": 3,
          "first_name": "Asem",
          "last_name": "Adel",
          "avatar": "../../../../assets/imgs/user-avatar/16.png"
        },
        "description": "Improve performance of data retrieval",
        "status": "done"
      },
      {
        "id": 5,
        "task_refrance": 2553165655,
        "title": "Create reporting module",
        "assigned_to": {
          "id": 4,
          "first_name": "Amr",
          "last_name": "Adel",
          "avatar": "../../../../assets/imgs/user-avatar/11.png"
        },
        "description": "Generate user activity reports",
        "status": "toDo"
      },
      {
        "id": 6,
        "task_refrance": 2553165656,
        "title": "Implement notification system",
        "assigned_to": {
          "id": 4,
          "first_name": "Amr",
          "last_name": "Adel",
          "avatar": "../../../../assets/imgs/user-avatar/11.png"
        },
        "description": "Set up email and push notifications",
        "status": "inProgress"
      },
      {
        "id": 7,
        "task_refrance": 2553165657,
        "title": "Enhance security features",
        "assigned_to": {
          "id": 4,
          "first_name": "Amr",
          "last_name": "Adel",
          "avatar": "../../../../assets/imgs/user-avatar/11.png"
        },
        "description": "Implement two-factor authentication",
        "status": "inProgress"
      },
      {
        "id": 8,
        "task_refrance": 2553165658,
        "title": "Deploy application",
        "assigned_to": {
          "id": 4,
          "first_name": "Amr",
          "last_name": "Adel",
          "avatar": "../../../../assets/imgs/user-avatar/11.png"
        },
        "description": "Launch the app to production server",
        "status": "done"
      }
    ];
  }

};

