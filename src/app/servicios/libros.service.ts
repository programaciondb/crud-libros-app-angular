import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LibrosInterface } from 'src/app/modelos/libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private rutaRest = "http://localhost:8089/libros/";
  httpOptions = { headers : new HttpHeaders({"Content-Type" : "application/json"})};
  constructor(private http: HttpClient) { }

  public getLibros(){
    return this.http.get(this.rutaRest);
  }
}
