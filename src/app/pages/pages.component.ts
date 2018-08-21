import { Component, OnInit, Input } from '@angular/core';
import {ImgCard} from '../modules/imagecard/imagecard.component';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  @Input() imgCard: ImgCard;
  @Input () imgCards: ImgCard[];

  constructor() { }

  ngOnInit() {
  }

}
