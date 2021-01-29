import { Injectable } from '@angular/core';
import { ExistRoomInterface, GetRoomsInterface } from '../interfaces/room.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  getRooms(): Promise<GetRoomsInterface[]> {
    return new Promise((res, err) => {
      res([
        {
          redirect: '/pasdu/room/abc',
          queryParams: {f: 'room', a: 'countdown'},
          subject: 'Asunto de la reunion 1',
          time: new Date().setMinutes(new Date().getMinutes() + 1)
        },
        {
          redirect: '/pasdu/room/abc',
          queryParams: {f: 'room', a: 'countdown'},
          subject: 'Asunto de la reunion 2',
          time: new Date().setHours(new Date().getHours() + 1)
        },
        {
          redirect: '/pasdu/room/abc',
          queryParams: {f: 'room', a: 'countdown'},
          subject: 'Asunto de la reunion 3',
          time: new Date().setHours(new Date().getHours() + 2)
        },
        {
          redirect: '/pasdu/room/abc',
          queryParams: {f: 'room', a: 'countdown'},
          subject: 'Asunto de la reunion 4',
          time: new Date().setHours(new Date().getHours() + 3)
        },
      ]);
    });
  }

  existRoom(room: string): Promise<ExistRoomInterface> {
    return new Promise((res, err) => {
      if (room === 'abc') {
        res({
          uid: 'algobueno',
          subject: 'Asunto de la reunion 4',
          username: 'thefersh',
          email: 'thefersh24@gmail.com',
          time: new Date().setMinutes(new Date().getMinutes() + 1),
          end: new Date().setHours(new Date().getHours() + 1)
        });
      } else {
        err();
      }
    });
  }
}
