import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import {Normalizer} from "../utils/normalizer";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import {ExerciceResponse} from '../exercices/models/response/exercice.response';

@Injectable()
export class ApirestService {

  protected url: '192.168.0.80:3000/api/';
  protected headers;

  constructor(protected http: HttpClient) {
    this.http = http;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });
  }

  getScenar(): Observable<ExerciceResponse> {
    return this.http.get(this.url + 'scenario');
  }

  getScenario() {
    console.log('coucou');
    this.getScenar().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(' erreur reception données scénario ');
    });
  }
}
