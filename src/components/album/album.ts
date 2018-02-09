import { Component } from '@angular/core';

/**
 * Generated class for the AlbumComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'album',
  templateUrl: 'album.html'
})
export class AlbumComponent {

  text: string;

  constructor() {
    console.log('Hello AlbumComponent Component');
    this.text = 'Hello World';
  }

}
