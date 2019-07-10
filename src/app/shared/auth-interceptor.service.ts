import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private session: SessionService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor', request);

    const API_USUARIOS_URL = /\/usuarios.php$/;
    const API_PRODUCTS_URL = /\/productos.php$/;
    let authHeader = null;

    if (request.method.toUpperCase() === 'POST') {
      request.body.key_marca_plataforma = environment.CLAVE_API;

      if (API_PRODUCTS_URL.test(request.url)) {
        const session = this.session.getSession();
        const token = session ? session.token : '';
        request.body.token = token;
        authHeader = `Bearer ${token}`;
      }
    }
    if (authHeader) {
      request = request.clone({
        setHeaders: {
          Authorization: authHeader
        }
      });
    }

    console.log(request);
    return next.handle(request);
  }
}
