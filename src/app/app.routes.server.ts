import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'admin-dashboard',
    renderMode: RenderMode.Client
  },
  {
    path: 'student-dashboard',
    renderMode: RenderMode.Client
  },
  {
    path: 'teacher-dashboard',
    renderMode: RenderMode.Client
  },
  {
    path: 'manage-teachers',
    renderMode: RenderMode.Client
  },
  {
    path: 'manage-students',
    renderMode: RenderMode.Client
  },
  {
    path: 'attendance-report',
    renderMode: RenderMode.Client
  },
  {
    path: 'manage-courses',
    renderMode: RenderMode.Client
  },
  {
    path: 'view-subjects-s',
    renderMode: RenderMode.Client
  },
  {
    path: 'view-attendance-s',
    renderMode: RenderMode.Client
  },
  {
    path: 'download-reports-s',
    renderMode: RenderMode.Client
  },
  {
    path: 'profile-settings-s',
    renderMode: RenderMode.Client
  },
  {
    path: 'manage-subjects-t',
    renderMode: RenderMode.Client
  },
  {
    path: 'view-attendance-t',
    renderMode: RenderMode.Client
  },
  {
    path: 'schedule-classes-t',
    renderMode: RenderMode.Client
  },
  {
    path: 'reports-t',
    renderMode: RenderMode.Client
  },
];
