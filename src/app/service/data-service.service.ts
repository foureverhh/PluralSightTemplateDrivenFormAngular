import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from '../model/user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private client:HttpClient) { }

  postUserSettingsForm(userSettings :UserSettings): Observable<UserSettings> {
    return this.client.post<UserSettings>('url', userSettings);
  }
}
