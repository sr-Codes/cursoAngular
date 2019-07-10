import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IResgisterApi } from 'src/app/shared/iresgister-api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registroDatos: any = {
    email: '',
    nombre: '',
    apellidos: '',
    sexo: '',
    idioma: '',
    isOk: '',
    password: ''
  };
  msgerror: string = null;

  sexKeys = ['hombre', 'mujer'];
  idiomaKeys = [  {key: 'ES', idioma: 'Castellano'},
  {key: 'EN', idioma: 'Inglés'},
  {key: 'FR', idioma: 'Francés'},
  {key: 'IT', idioma: 'Italia'}];

  constructor(private http: HttpClient) { }
  ngOnInit() {
  }

  registrarUsuario() {
    const datosApi: IResgisterApi = {
      option: environment.SERVICIO_RESGISTER_API,
      email: this.registroDatos.email,
      contrasena: this.registroDatos.password,
      nombre: this.registroDatos.nombre,
      apellidos: this.registroDatos.apellidos,
    };
    this.http.post(environment.API_USERS_URL, datosApi).subscribe (
      (data: any) => {
        if (data.status === 'OK') {
          this.msgerror = '';
        } else {
          this.msgerror = data.msg;
        }
      }, errorHttp => {
        this.msgerror = 'Error interno';
      }
    );
  }

}
