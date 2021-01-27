import { SafeResourceUrl } from '@angular/platform-browser';

interface HttpRequestBase{
    err: string;
}

export interface GetRoleCardHttpResponseInterface extends HttpRequestBase{
  role: GetRoleCardInterface[];
}

export interface GetUserPublicInfoHttp extends HttpRequestBase{
  user: UserRoleInterface;
}

export interface GetRoleCardInterface{
  redirect: string;                 /** Redirecciona a la pagina de la clase */
  queryparams: any;                 /** Parametros GET para la url */
  name: string;                     /** nombre de la clase */
  img: string;                      /** Imagen representativa de la clase */
  user: string;                     /** ID de usuario */
}

export interface RoleSelectCardInterface{
  redirect: string;                 /** Redirecciona a la pagina de la clase */
  queryparams: any;                 /** Parametros GET para la url */
  name: string;                     /** nombre de la clase */
  img?: SafeResourceUrl;             /** Imagen representativa de la clase */
  user: UserRoleInterface;          /** Usuario encargado de la calse */
  notice: NoticeInterface[];        /** notificaciones de la clase */
}

export interface NoticeInterface{
  icon: string;                     /** Icono a mostrar en pantalla */
  text: string;                     /** texto a mostrar en pantalla */
  redirect: string;                 /** Ruta de redireccion */
  queryparams: any;                 /** Parametros GET para la url */
}

export interface UserRoleInterface {
  img: SafeResourceUrl | string;    /** Imagen de perfil del usuario */
  name: string;                     /** nombre de usuario */
  role: string;                     /** Rol del usuario (rol - institucion name */
  redirect: string;                 /** Ruta de redireccion */
  queryparams: any;                 /** Parametros GET para la url */
}


export interface VerifyUserNameRequest extends HttpRequestBase{
    exist: boolean;
}