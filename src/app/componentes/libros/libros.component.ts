import { Component, OnInit } from '@angular/core';
import { LibrosInterface } from 'src/app/modelos/libros';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: LibrosInterface;
  constructor(private librosServicios: LibrosService) { }

  ngOnInit() {
  }

  public getLibros(){
    this.librosServicios.getLibros()
    .subscribe( (libros: LibrosInterface) => (this.libros=libros) );
  }

}
