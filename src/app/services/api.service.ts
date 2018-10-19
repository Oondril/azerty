import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import {Normalizer} from "../utils/normalizer";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import {ExerciceResponse} from '../exercices/models/response/exercice.response';

@Injectable()
export class ApiService {

  protected url : '?/api/';
  protected headers;

  constructor(protected http:HttpClient)  {
    this.http = http;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    });
  }

  getExercice():Observable<ExerciceResponse>{
    return this.http.get(this.url + 'exercice');
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
