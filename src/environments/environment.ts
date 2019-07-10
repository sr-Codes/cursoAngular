// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  CLAVE_API: 'FORMACION_PLAT1',
  API_USERS_URL: 'http://s739192398.mialojamiento.es/cmm/api/usuarios.php',
  SERVICIO_LOGIN_API: 'login',
  SERVICIO_RESGISTER_API: 'registerUser',

  API_PRODUCTS_URL: 'http://s739192398.mialojamiento.es/cmm/api/productos.php',
  SERVICIO_GET_PRODUCTS_API: 'get',
  SERVICIO_NEW_PRODUCTS_API: 'new',
  SERVICIO_MODIFY_PRODUCTS_API: 'modify',
  SERVICIO_DELETE_PRODUCTS_API: 'delete'


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
