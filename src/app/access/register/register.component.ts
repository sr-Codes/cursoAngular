import { Component, OnInit } from '@angular/core';

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
  };

  msgerror: string = null;

  sexKeys = ['hombre', 'mujer'];
  idiomaKeys = [  {key: 'ES', idioma: 'Castellano'},
                  {key: 'EN', idioma: 'Inglés'},
                  {key: 'FR', idioma: 'Francés'},
                  {key: 'IT', idioma: 'Italia'}];

  constructor() { }

  ngOnInit() {
  }

  registrarUsuario() {
    console.log(this.registroDatos);
    alert(JSON.stringify(this.registroDatos));
  }

}
