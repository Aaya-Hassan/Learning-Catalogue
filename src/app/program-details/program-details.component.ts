import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as Plyr from 'plyr';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss'],
  providers: [BsModalService]
})
export class ProgramDetailsComponent implements OnInit {
  modalRef: BsModalRef;
  config;
  constructor(private modalService: BsModalService) {}
  player: Plyr;
  videoSources: Plyr.Source[] = [
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
      type: 'video/mp4',
      size: 576,
    },
  ];
  poster = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg';

  tracks = [
    {
      kind: 'captions',
      label: 'English',
      srclang: 'en',
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
      default: true,
    },
    {
      kind: 'captions',
      label: 'French',
      srclang: 'fr',
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
    }
  ];
  opened = 0;
  listValue: Array<any> = [
    {
      'Course A': ['25/9/2020 - 12/10/2020', 'An introduction to the enterprises of computer science and the art of Programming'],
      'Course B': ['25/9/2020 - 12/10/2020', 'An introduction to the enterprises of computer science and the art of Programming'],
      'Course C': ['25/9/2020 - 12/10/2020', 'An introduction to the enterprises of computer science and the art of Programming'],
      'Course D': ['25/9/2020 - 12/10/2020', 'An introduction to the enterprises of computer science and the art of Programming'],
      'Course E': ['25/9/2020 - 12/10/2020', 'An introduction to the enterprises of computer science and the art of Programming']
    }
  ];
  ngOnInit() {
    this.config =  {
      class: 'modal-dialog-centered'
    };
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

}
