import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotosProvider } from './../../providers/photos/photos'
import { Album } from './../../interfaces/album.interface';
import { Photo } from './../../interfaces/photo.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  albums: Album[];
  photo: Photo[];

  constructor(public navCtrl: NavController,
    photosProvider: PhotosProvider) {

    photosProvider.getAlbums()
      .then((albums: Album[]) => {
        this.albums = albums.slice(albums.length - 3, albums.length)
      })

  }

}
