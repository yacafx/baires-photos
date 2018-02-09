import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PhotosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhotosProvider {

  constructor(public http: HttpClient) {

  }

  public getAlbums() {
    return fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json());
  }

  getPhoto(id) {
    return fetch('https://jsonplaceholder.typicode.com/photo/' + id)
      .then(response => response.json())
      .then(json => console.log(json))
  }

}
