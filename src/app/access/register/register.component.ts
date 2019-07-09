import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

interface IRegistroDatos {
  email: string;
  nombre: string;
  apellidos: string;
  sexo: string;
  idioma: string;
  aceptaOK: string;
}

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
    const API_USERS_URL = 'http://s739192398.mialojamiento.es/cmm/api/usuarios.php';
    const datosApi: any = {
      key_marca_plataforma: 'FORMACION_PLAT1',
      option: 'registerUser',
      email: this.registroDatos.email,
      contrasena: this.registroDatos.password,
      nombre: this.registroDatos.nombre,
      apellidos: this.registroDatos.apellidos,
    };
    this.http.post(API_USERS_URL, datosApi).subscribe (
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
