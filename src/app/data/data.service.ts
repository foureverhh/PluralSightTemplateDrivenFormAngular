import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from '../model/user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<UserSettings> {
    return this.http.post<UserSettings>('https://putsreq.com/vsdGXNjAUqXWCRkYvfNV', userSettings);
  }

  getSubscriptionTypes():Observable<string[]> {
    return of(['One','Two','Three']);
  }
}
