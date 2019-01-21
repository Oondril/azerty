import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import {Normalizer} from "../utils/normalizer";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import {ScenarioResponse} from '../exercices/models/response/scenario.response';
import {environment} from '../../environments/environment';
import {Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  protected url:string;
  protected headers;

  constructor(protected http:HttpClient)  {
    this.url = 'http://' + environment.apiUrl + '/api';
    this.http = http;
    /*this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });*/
  }

  getScenario():Observable<any>{
    return this.http.get(this.url + '/scenario/')
      .map(
        (res:Response) => res
      );
  }

  getTextes():Observable<any>{
    return this.http.get(this.url + '/textes/')
      .map(
        (res:Response) => res
      );
  }

  getActions():Observable<any>{
    return this.http.get(this.url + '/actions/')
      .map(
        (res:Response) => res
      );
  }

  getPrevention():Observable<any>{
    return this.http.get(this.url + '/prevention/')
      .map(
        (res:Response) => res
      );
  }

  getIndice():Observable<any>{
    return this.http.get(this.url + '/indice/')
      .map(
        (res:Response) => res
      );
  }

  /*getUserWelcomeMsg() {
    return this.http.get(this.url + 'me/msg');
  }

  updateUserProfileInformations(username=null, firstName = null, lastName = null, gender = null, country = null, birthDate = null) {
    return this.http.post(this.url + 'me/profile?personal=1',
      Normalizer.serializeHttpParams("username", username, "first_name", firstName, "last_name", lastName, "gender", gender, "country", country, "birth_date", birthDate) , {
        headers: this.headers
      })
  }

  checkPassword(currentPassword):Observable<any> {
    return this.http.post(this.url + 'check_password',
      Normalizer.serializeHttpParams("password", currentPassword) , {
        headers: this.headers
      })
  }

  deleteProfilePicture():Observable<any> {
    return this.http.post(this.url + 'me/delete_profile_picture', null, {
      headers: this.headers
    })
  }

  postBonusBuy(bonusId):Observable<any>{
    return this.http.post(this.url + 'me/bonus/buy', Normalizer.serializeHttpParams("bonus_id", bonusId), {
      headers: this.headers
    })
  }*/

}
