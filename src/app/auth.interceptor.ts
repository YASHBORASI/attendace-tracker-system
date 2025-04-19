import { HttpInterceptorFn } from '@angular/common/http';
import { SharedServiceService } from './Shared Service/shared-service.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
 // const authService = inject(SharedServiceService);
  const token = sessionStorage.getItem('authToken'); // Get token from service or sessionStorage

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  return next(req);
};
