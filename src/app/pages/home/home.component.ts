import { Component,  } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showModal();
    }, 1500);
  }

  showModal(): void {
    const modalElement = document.getElementById('imageModal');
    const modal = new bootstrap.Modal(modalElement); // Initialize modal
    modal.show(); // Show modal on page load
  }


}