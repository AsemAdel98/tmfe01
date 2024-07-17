import { Component, OnInit } from '@angular/core';
import { GlobalFunctionsService } from '../../../../../core/services/global-functions.service';
import { MenuItem } from 'primeng/api';
import { CreateUpdateTaskComponent } from '../../components/create-update-task/create-update-task.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TasksService } from '../../tasks.service';
import { CookieService } from 'ngx-cookie-service';
import { ViewTaskDialogComponent } from '../../components/view-task-dialog/view-task-dialog.component';
import { DeleteDialogComponent } from '../../../../../core/reusable-components/delete-dialog/delete-dialog.component';
import { NeedDetailsDialogComponent } from '../../components/need-details-dialog/need-details-dialog.component';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  allTasks: TaskObj[] = [];
  availableTasks: TaskObj[] = [];
  inProgressTasks: TaskObj[] = [];
  doneTasks: TaskObj[] = [];
  draggedTask: TaskObj | null = null;
  dropZone: 'todo' | 'inProgress' | 'done' | null = null;
  items!: MenuItem[]
  ref: DynamicDialogRef | undefined;
  userRole: any;
  userId: any;

  constructor(public global: GlobalFunctionsService, private dialogService: DialogService, private tasksService: TasksService, private cookieService: CookieService) { }

  ngOnInit() {
    const userDataString = this.cookieService.get('user_data');
    this.userRole = JSON.parse(userDataString).role;
    this.userId = JSON.parse(userDataString).user_id;
    this.getTasks();
    this.sortTasks();
  }
  getTasks() {
    if (this.userRole === 'user') {
      this.allTasks = this.tasksService.getTasks().filter(task => task.assigned_to.id === this.userId);
    } else {
      this.allTasks = this.tasksService.getTasks();
    }
  }
  sortTasks() {
    // Clear the arrays before pushing filtered tasks
    this.availableTasks = [];
    this.inProgressTasks = [];
    this.doneTasks = [];

    // Filter tasks based on status and push them into the respective arrays
    this.availableTasks.push(...this.allTasks.filter(task => task.status === 'toDo'));
    this.inProgressTasks.push(...this.allTasks.filter(task => task.status === 'inProgress'));
    this.doneTasks.push(...this.allTasks.filter(task => task.status === 'done'));
  }
  getTaskData(taskData: any, status?: string, fromArray?: TaskObj[], toArray?: TaskObj[]) {
    this.items = [
      {
        label: 'GENERAL.VIEW',
        icon: 'pi pi-eye mx-2',
        command: () => this.viewTask(taskData)
      },
    ];

    if (this.userRole === 'manager' && taskData.status !== 'done') {
      this.items.push({
        label: 'GENERAL.EDIT',
        icon: 'pi pi-pen-to-square mx-2',
        command: () => this.createUpdateTask(taskData)
      });
    }

    if (this.userRole === 'admin') {
      this.items.push({
        label: 'GENERAL.DELETE',
        icon: 'pi pi-trash mx-2',
        command: () => this.openDeleteDialog(taskData)
      });
    }

    if (this.userRole === 'user') {
      if (taskData.status !== 'done') {
        this.items.push({
          label: (this.global.currentLanguage === 'ar'?'الانتقال الي ':'Move to ') + status,
          icon: 'pi pi-arrow-right-arrow-left mx-2',
          command: () => this.moveTask(taskData, fromArray ? fromArray : [], toArray ? toArray : [])
        });
      }

      if (taskData.status === 'inProgress') {
        this.items.push({
          label: 'TASKS.MORE_DETAILS',
          icon: 'pi pi-plus mx-2',
          command: () => this.moreDetailsDialog()
        });
      }
    }
  }


  dragStart(task: TaskObj) {
    this.draggedTask = task;
  }

  drop(zone: 'todo' | 'inProgress' | 'done') {
    if (this.draggedTask) {
      if (zone === 'inProgress' && this.availableTasks.includes(this.draggedTask)) {
        this.moveTask(this.draggedTask, this.availableTasks, this.inProgressTasks);
      } else if (zone === 'done' && this.inProgressTasks.includes(this.draggedTask)) {
        this.moveTask(this.draggedTask, this.inProgressTasks, this.doneTasks);
      }
      this.draggedTask = null;
    }
  }

  dragEnd() {
    this.draggedTask = null;
  }

  moveTask(task: TaskObj, fromArray: TaskObj[], toArray: TaskObj[]) {
    const index = fromArray.indexOf(task);
    if (index > -1) {
      fromArray.splice(index, 1);
      toArray.push(task);
      task.status = toArray === this.availableTasks ? 'toDo' : toArray === this.inProgressTasks ? 'inProgress' : 'done';
    }
  }




  createUpdateTask(taskData = ''): void {
    const title = this.global.currentLanguage === 'ar' ? 'إضافة مهمة' : 'Add new task';
    const editTitle = this.global.currentLanguage === 'ar' ? 'تعديل المهمة' : 'Edit task';
    this.ref = this.dialogService.open(CreateUpdateTaskComponent, {
      header: taskData ? editTitle : title,
      maximizable: true,
      draggable: true,
      width: '60vw',
      breakpoints: { '1199px': '75vw', '575px': '90vw', '480px': '80vw' },
      data: taskData
    });
    this.ref.onClose.subscribe((res) => {
    })
  }
  viewTask(taskData: TaskObj): void {
    this.ref = this.dialogService.open(ViewTaskDialogComponent, {
      header: taskData.title + `(${taskData.task_refrance})`,
      maximizable: true,
      draggable: true,
      width: '60vw',
      breakpoints: { '1199px': '75vw', '575px': '90vw', '480px': '80vw' },
      data: taskData
    });
  }
  moreDetailsDialog(): void {
    const title = this.global.currentLanguage === 'ar' ? 'إضافة تفاصيل' : 'Add more details';
    this.ref = this.dialogService.open(NeedDetailsDialogComponent, {
      header: title,
      maximizable: true,
      draggable: true,
      width: '60vw',
      breakpoints: { '1199px': '75vw', '575px': '90vw', '480px': '80vw' },
    });
  }

  openDeleteDialog(taskData: TaskObj): void {
    const title = this.global.currentLanguage === 'ar' ? 'حذف' : 'Delete';
    this.ref = this.dialogService.open(DeleteDialogComponent, {
      header: title + ' ' + taskData.title,
      closeOnEscape: true,
      draggable: true,
      breakpoints: { '1199px': '75vw', '575px': '90vw' },
      width: '50vw',
      data: {
        name: taskData.title,
        apiService: ''
      },
    });
    this.ref?.onClose.subscribe((res) => {
    })
  }

}

export interface TaskObj {
  id: number | string;
  task_refrance: number;
  title: string;
  assigned_to: {
    id: number | string;
    first_name: string,
    last_name: string,
    avatar: string
  };
  description: string;
  status: string;
}
