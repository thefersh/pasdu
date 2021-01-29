import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { DomService } from 'src/app/service/dom.service';
import { ExternalAPIOptions, JitsiMeetExternalAPI } from 'jitsi-meet';
import { RoomService } from '../../services/room.service';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

declare const window: Window & typeof globalThis & any;

@Component({
  selector: 'app-room-view-pasdu',
  templateUrl: './room-view-pasdu.component.html',
  styleUrls: ['./room-view-pasdu.component.scss']
})
export class RoomViewPasduComponent implements AfterViewInit, OnDestroy {
  // errores
  err = false;
  errMsg = '';
  errAction: 'reload';

  jitsi: JitsiMeetExternalAPI;
  isJitsi = false;

  loadinfo = false;

  options: ExternalAPIOptions;

  countdownHour = 0;
  countdownMinute = 0;
  countdownSeconds = 0;
  countdownInterval: Subscription;

  constructor(
    private dom: DomService,
    private room: RoomService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.dom.title.setTitle('Verificando Conferencia');
  }

  ngAfterViewInit(): void {
    if (this.dom.isBrowser()) {
      this.dom.addJitsiApi().then(() => {
        this.room.existRoom(this.activateRouter.snapshot.params.room).then(r => {
          this.loadinfo = true;
          this.options = {
            roomName: r.uid,
            parentNode: document.querySelector('#jsmdis'),
            onload: () => {
              this.isJitsi = true;
              this.dom.title.setTitle(`${r.subject} - Pasdu`);
            },
            width: '100%',
            height: '100%',
            userInfo: {
              displayName: r.username,
              email: r.email
            },
            configOverwrite: {
              enableWelcomePage: false,
              enableClosePage: true,
              defaultLanguage: 'es',
              enableCalendarIntegration: false,
              prejoinPageEnabled: true,
              gatherStats: false,
              localRecording: {
                enabled: true,
                format: 'wav'
              },
              disableInviteFunctions: true,
              hideConferenceTimer: true,
              subject: r.subject,
              debug: false
            },
            interfaceConfigOverwrite: {
              APP_NAME: 'Pasdu Videoconferencia - ' + r.subject,
              DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
              ENABLE_DIAL_OUT: false,
              ENABLE_FEEDBACK_ANIMATION: false,
              MOBILE_APP_PROMO: false,
              SETTINGS_SECTIONS: ['devices', 'language', 'profile'],
              SHOW_BRAND_WATERMARK: false,
              SHOW_CHROME_EXTENSION_BANNER: false,
              SHOW_DEEP_LINKING_IMAGE: false,
              SHOW_JITSI_WATERMARK: false,
              SHOW_POWERED_BY: false,
              SHOW_PROMOTIONAL_CLOSE_PAGE: false,
              SHOW_WATERMARK_FOR_GUESTS: false,
              TOOLBAR_BUTTONS: [
                'shortcuts', /** admin */
                'desktop', /** admin */
                'sharedvideo', /** admin */
                'microphone',
                'camera',
                'fullscreen',
                'fodeviceselection',
                'chat',
                'recording',
                'settings',
                'raisehand',
                'videoquality',
              ]
            }
          };
          this.jitsi = new window.JitsiMeetExternalAPI('meet.jit.si', this.options);
          this.intervalTimeout(1, r.end);
          this.jitsi.executeCommand('toggleLobby', true);
        }).catch((e) => {
          console.log(e);
          this.err = true;
          this.errMsg = 'Upps. Hubo un problema.';
          this.errAction = 'reload';
        });
      }).catch((e) => {
        console.log(e);
        this.err = true;
        this.errMsg = 'No se pudo cargar la conferencia, recarge la pagina en unos instantes.';
        this.errAction = 'reload';
      });
    }
  }

  reload(): void {
    window.location.reload();
  }

  ngOnDestroy(): void {
    if (typeof this.jitsi !== 'undefined') {
      this.jitsi.dispose();
      this.jitsi = undefined;
    }
  }

  intervalTimeout(timeCloseDoor: number, end: number): void {
    const timeEnd = (new Date(end)).getTime();
    if (new Date().getTime() <= timeEnd) {
      this.countdownInterval = interval(1000).subscribe(() => {
        const n = new Date().getTime();
        const distance = timeEnd - n;
        this.countdownHour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.countdownMinute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.countdownSeconds = Math.floor((distance % (1000 * 60)) / 1000);

        // if (this.countdownHour === 0 && this.countdownMinute < timeCloseDoor) {}

        if (distance < 999) {
          this.countdownInterval.unsubscribe();
          this.router.navigate(['/pasdu/room'], {queryParams: {a: 'endCall', f: 'roomCall'}});
        }
      });
    }else {
      this.router.navigate(['/pasdu/room'], {queryParams: {a: 'endCall', f: 'roomCall'}});
    }
  }

}
