import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit(){
    
  }

  buttonClicked(){
    document.getElementById('title-box').classList.remove('slide-in-blurred-bottom');
    document.getElementById('title-box').classList.add('slide-in-blurred-top');
  }
}
