import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoteService {

constructor(private http: HttpClient) { }

baseURL = "https://localhost:5001/api/Evento";

  // public get

}
