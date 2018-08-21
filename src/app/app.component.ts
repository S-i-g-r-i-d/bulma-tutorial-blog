import {Component, Input} from '@angular/core';
import {ImgCard} from './modules/imagecard/imagecard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input () imgCard: ImgCard;
  @Input () imgCards: ImgCard[];

  title = 'bulma-tutorial-blog';
}
