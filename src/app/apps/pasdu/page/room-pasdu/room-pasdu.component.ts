import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DomService } from 'src/app/service/dom.service';

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

  in = false;

  constructor(
    private dom: DomService
  ) {
    this.dom.title.setTitle('Sala de Videoconferencias');
    if (this.dom.isBrowser()) {
      const timeEnd = (new Date('Jan 27, 2021 18:05:00')).getTime();
      this.dom.title.setTitle('Asunto de la reunion - salon de clases | Pasdu');
      if (new Date().getTime() <= timeEnd) {
        console.log('mayor');
        this.countdownInterval = interval(1000).subscribe(() => {
          const n = new Date().getTime();
          const distance = timeEnd - n;
          this.countdownDay = Math.floor(distance / (1000 * 60 * 60 * 24));
          this.countdownHour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.countdownMinute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          this.countdownSeconds = Math.floor((distance % (1000 * 60)) / 1000);

          this.in = this.countdownHour === 0 && this.countdownMinute < 15;
          console.log(distance);
          if (distance < 999) {
            this.countdownInterval.unsubscribe();
            console.log('end');
          }
        });
      }else {
        this.in = true;
        console.log('menor');
      }
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
