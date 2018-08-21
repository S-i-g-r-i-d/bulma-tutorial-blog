import { Component, OnInit } from '@angular/core';
import { ImgCard} from '../../modules/imagecard/imagecard.component';


@Component({
  selector: 'app-imagecardpage',
  templateUrl: './imagecardpage.component.html',
  styleUrls: ['./imagecardpage.component.css']
})
export class ImagecardpageComponent implements OnInit {

  imgCards: ImgCard[] = [
    {
      imgPath: 'https://cdn-images-1.medium.com/max/800/1*_L60Gs-iTza_LnBdwqzEiA.png'
    },
    {
      imgPath: 'https://cdn-images-1.medium.com/max/800/1*t929RLZ28EvUsc5f3Hbh8Q.png',
    },
    {
      imgPath: 'https://cdn-images-1.medium.com/max/800/1*8xYM6BQXa7HNpMd2XMD5Lw.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
