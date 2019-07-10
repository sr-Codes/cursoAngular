import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ISession, SessionService } from 'src/app/shared/session.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormDatos = {
    email: '',
    contrasena: ''
  };

  msgerror: string = null;
  constructor(private http: HttpClient, private session: SessionService) { }

  ngOnInit() {
  }

  iniciarSession() {
    const datosApi: any = {
      option: environment.SERVICIO_LOGIN_API,
      email: this.loginFormDatos.email,
      contrasena: this.loginFormDatos.contrasena
    };
    this.http.post(environment.API_USERS_URL, datosApi).subscribe(
      (data: any) => {
        if (data.status === 'OK') {
          const dataSession: ISession = {
            email: datosApi.email,
            nombre: data.nombre,
            token: data.token
          };
          this.session.setSession(dataSession);
          this.msgerror = '';
        } else {
          this.session.setSession(null);
          this.msgerror = data.msg;
        }
      },
      errorHttp => {
        this.msgerror = 'Error interno';
      }
    );
  }
}
