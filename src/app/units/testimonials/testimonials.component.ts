import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {


    // slides 
    Slides:any = [
      {
        id: 1,
        src:'assets/images/canara.png',
        text:"We've been relying on Sastha security services for over a year now, and their professionalism and dedication are truly commendable. The guards provided are well-trained and vigilant, ensuring the safety of our premises round the clock. With their services, we've achieved a new level of peace of mind. Highly recommended!",
        author:'Arjun - Rajakumari'
      },
      {
        id: 2,
        src:'assets/images/canara.png',
        text:"Sastha has been an invaluable partner in securing our property. Their watchmen are not only vigilant but also courteous and proactive. We've seen a significant reduction in security incidents since we started working with them. Their commitment to our safety is truly appreciated.",
        author:'Latheef - Marikkar Motors'
      },
      {
        id: 3,
        src:'assets/images/canara.png',
        text:"When it comes to security, Sastha Security Service is our go-to choice. Their team is responsive, adaptable, and always ready to address our unique security needs. From event security to regular patrolling, they've consistently exceeded our expectations. Partnering with them has been a decision we're grateful for.",
        author:'Rajasekharan nair - Jayasekhar Hospital'
      },
    ]
  
    constructor() { }
    customOptions: OwlOptions = {
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: true,
      navSpeed: 600,
      navText: ['&#8249', '&#8250;'],
      responsive: {
        0: {
          items: 1 
        },
        400: {
          items: 1
        },
        760: {
          items: 1
        },
        1000: {
          items: 1
        }
      },
      nav: false,
      autoplay: true,
      
    }
  
}
