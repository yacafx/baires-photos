import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotosProvider } from './../../providers/photos/photos'
import { Album } from './../../interfaces/album.interface';
import { Photo } from './../../interfaces/photo.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  albums: Album[];
  photos: Photo[] = [];

  constructor(public navCtrl: NavController,
    public photosProvider: PhotosProvider) {
  }
  ngOnInit() {
    this.photosProvider.getAlbums()
      .then((albums: Album[]) => {
        this.albums = albums.slice(albums.length - 3, albums.length)
      })
  }

  showPhoto(id) {
    this.photosProvider.getPhoto(id)
      .then((photos: Photo[]) => {
        this.photos = photos.slice(photos.length - 2, photos.length)
        console.log(this.photos)
      });
  }

}
