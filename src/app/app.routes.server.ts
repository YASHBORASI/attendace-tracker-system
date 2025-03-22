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
];
