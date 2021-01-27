export interface GetAdminMenuHttpInterface{
    err: string;
    sidebar: GetAdminMenuInterface[];
}

export interface GetAdminMenuInterface{
    type: 'link' | 'menu' | 'title';        /** Tipo de elemento */
    name: string;                           /** texto que se muestra en pantalla */
    redirect?: string;                      /** redireccion */
    queryparams?: any;                      /** si existe 'redirect': parametros de navegacion */
    icon?: string;                          /** si es un link: icono que se muestra */
    menu?: GetAdminMenuInterface[];
}