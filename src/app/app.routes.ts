import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { ManageTeachersComponent } from './components/manage-teachers/manage-teachers.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login Page',
    },
    {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        title: 'Admin Dashboard',
    },
    {
        path: 'student-dashboard',
        component: StudentDashboardComponent,
        title: 'Student Dashboard',
    },
    {
        path: 'teacher-dashboard',
        component: TeacherDashboardComponent,
        title: 'Teacher Dashboard',
    },
    {
        path: 'manage-teachers',
        component: ManageTeachersComponent,
        title: 'Manage Teachers',
    },
];
