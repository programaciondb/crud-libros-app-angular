import { Component, OnInit } from '@angular/core';
import { LibrosInterface } from 'src/app/modelos/libros';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libro: LibrosInterface;
  public libros: LibrosInterface;
  constructor(private librosServicios: LibrosService) { }

  ngOnInit() {
    this.getLibros();
    this.getLibro(1);
  }

  public getLibros() {
    this.librosServicios.getLibros()
      .subscribe((libros: LibrosInterface) => (this.libros = libros));
  }

  public getLibro(id: number) {
    var libroObservable = this.librosServicios.getLibro(id);
    libroObservable.subscribe(
      libroObtenido => this.libro = libroObtenido
    );
  }

}
