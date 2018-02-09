import { NgModule } from '@angular/core';
import { AlbumComponent } from './album/album';
import { PhotoComponent } from './photo/photo';
@NgModule({
	declarations: [AlbumComponent,
    PhotoComponent],
	imports: [],
	exports: [AlbumComponent,
    PhotoComponent]
})
export class ComponentsModule {}
