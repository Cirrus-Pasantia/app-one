import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageUrl = assetUrl('../assets/escudo.png');
  title = 'angular1';
  name = '';

  sendName(){
    console.log("Send name",this.name);
  }
}
