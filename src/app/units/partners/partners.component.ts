import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent {


  // slides 
  Slides:any = [
    {
      id: 1,
      src:'assets/images/canara.png',
      alt:'Side 1',
      title:'Side 1'
    },
    {
      id: 2,
      src:'assets/images/rajakumari.svg',
      alt:'Side 2',
      title:'Side 2'
    },
    {
      id: 3,
      src:'assets/images/artec.png',
      alt:'Side 3',
      title:'Side 3'
    },
    {
      id: 4,
      src:'assets/images/marikkar.png',
      alt:'Side 4',
      title:'Side 4'
    },
    {
      id: 5,
      src:'assets/images/capital.png',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: 6,
      src:'assets/images/maa.png',
      alt:'Side 5',
      title:'Side 5'
    },
    {
      id: 7,
      src:'assets/images/mac.png',
      alt:'Side 5',
      title:'Side 5'
    }
  ]

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: false,
    autoplay: true,
    autoplayTimeout:5000
  }


 
}
