import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { DomService } from 'src/app/service/dom.service';
import { GetRoomsInterface } from '../../interfaces/room.interface';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-pasdu',
  templateUrl: './room-pasdu.component.html',
  styleUrls: ['./room-pasdu.component.scss']
})
export class RoomPasduComponent implements OnInit, OnDestroy {
  countdownInterval: Subscription;

  countdownDay = 0;
  countdownHour = 0;
  countdownMinute = 0;
  countdownSeconds = 0;

  subject = '';
  rooms = false;
  redirect = '';
  queryparams = {};

  allRooms: GetRoomsInterface[] = [];

  in = false;

  constructor(
    private dom: DomService,
    private room: RoomService,
    private router: Router
  ) {
    this.dom.title.setTitle('Sala de Videoconferencias');
    if (this.dom.isBrowser()) {
      this.room.getRooms().then(r => {
        this.allRooms = r;
        this.subject = r[0].subject;
        this.rooms = r.length > 0;
        this.redirect = r[0].redirect;
        this.queryparams = r[0].queryParams;
        const timeEnd = (new Date(r[0].time)).getTime();
        this.dom.title.setTitle('Asunto de la reunion - salon de clases | Pasdu');
        if (new Date().getTime() <= timeEnd) {
          this.countdownInterval = interval(1000).subscribe(() => {
            const n = new Date().getTime();
            const distance = timeEnd - n;
            this.countdownDay = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.countdownHour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.countdownMinute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.countdownSeconds = Math.floor((distance % (1000 * 60)) / 1000);

            this.in = this.countdownHour === 0 && this.countdownMinute < 15;
            if (distance < 999) {
              this.countdownInterval.unsubscribe();
              this.router.navigate([r[0].redirect], {queryParams: r[0].queryParams});
            }
          });
        }else {
          this.in = true;
          this.router.navigate([r[0].redirect], {queryParams: r[0].queryParams});
        }
      });
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (typeof this.countdownInterval !== 'undefined') {
      this.countdownInterval.unsubscribe();
    }
  }

}
