export interface GetRoomsInterface {
    redirect: string;   /** Redireccion */
    queryParams: any;   /** parametros GET */
    subject: string;    /** Asinto de la reunion */
    time: number;       /** Hora de inicio */
}
export interface ExistRoomInterface{
    subject: string;    /** Asinto de la reunion */
    uid: string;        /** id de la reunion */
    username: string;   /** de usuario */
    email: string;      /** de usuario */
    time: number;       /** Hora de inicio */
    end: number;        /** Hora de fin */
}
