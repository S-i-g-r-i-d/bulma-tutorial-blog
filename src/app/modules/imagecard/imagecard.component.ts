import {Component,  OnInit, Input} from '@angular/core';

export interface ImgCard {
  imgPath: string;
}

@Component({
  selector: 'app-imagecard',
  templateUrl: './imagecard.component.html',
  styleUrls: ['./imagecard.component.css']
})
export class ImagecardComponent implements OnInit {
  @Input() imgCard: ImgCard;

  constructor() { }

  ngOnInit() {
  }

}
