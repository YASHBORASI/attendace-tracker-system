import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './components/teacher-dashboard/teacher-dashboard.component';
import { ManageTeachersComponent } from './components/manage-teachers/manage-teachers.component';
import { ManageStudentsComponent } from './components/manage-students/manage-students.component';
import { AttendanceReportComponent } from './components/attendance-report/attendance-report.component';
import { ManageCoursesComponent } from './components/manage-courses/manage-courses.component';
import { ViewSubjectsSComponent } from './components/view-subjects-s/view-subjects-s.component';
import { ViewAttendanceSComponent } from './components/view-attendance-s/view-attendance-s.component';
import { DownloadReportsSComponent } from './components/download-reports-s/download-reports-s.component';
import { ProfileSettingsSComponent } from './components/profile-settings-s/profile-settings-s.component';
import { ManageSubjectsTComponent } from './components/manage-subjects-t/manage-subjects-t.component';
import { ViewAttendanceTComponent } from './components/view-attendance-t/view-attendance-t.component';
import { ScheduleClassesTComponent } from './components/schedule-classes-t/schedule-classes-t.component';
import { ReportsTComponent } from './components/reports-t/reports-t.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { MarkAttendanceComponent } from './components/mark-attendance/mark-attendance.component';

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
    {
        path: 'manage-students',
        component: ManageStudentsComponent,
        title: 'Manage Students',
    },
    {
        path: 'attendance-report',
        component: AttendanceReportComponent,
        title: 'Attendance Report',
    },
    {
        path: 'manage-courses',
        component: ManageCoursesComponent,
        title: 'Manage Courses',
    },
    {
        path: 'view-subjects-s',
        component: ViewSubjectsSComponent,
        title: 'View subject',
    },
    {
        path: 'view-attendance-s',
        component: ViewAttendanceSComponent,
        title: 'View  Attendance',
    },
    {
        path: 'download-reports-s',
        component: DownloadReportsSComponent,
        title: 'Download Reports',
    },
    {
        path: 'profile-settings-s',
        component: ProfileSettingsSComponent,
        title: 'Download Reports',
    },
    {
        path: 'manage-subjects-t',
        component: ManageSubjectsTComponent,
        title: 'Manage Subjects',
    },
    {
        path: 'view-attendance-t',
        component: ViewAttendanceTComponent,
        title: 'View Attendance',
    },
    {
        path: 'schedule-classes-t',
        component: ScheduleClassesTComponent,
        title: 'Schedule Classes',
    },
    {
        path: 'reports-t',
        component: ReportsTComponent,
        title: 'Reports',
    },
    {
        path: 'add-teacher',
        component: AddTeacherComponent,
        title: 'add teacher',
    },
    {
        path: 'add-student',
        component: AddStudentComponent,
        title: 'add Student',
    },
    {
        path: 'add-course',
        component: AddCourseComponent,
        title: 'add Course',
    },
    {
        path: 'add-subject',
        component: AddSubjectComponent,
        title: 'add Course',
    },
    {
        path: 'mark-attendance',
        component: MarkAttendanceComponent,
        title: 'mark-attendance',
    },
];
