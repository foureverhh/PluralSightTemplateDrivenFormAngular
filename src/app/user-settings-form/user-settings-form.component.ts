import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../model/user-settings';
@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {
  userSettings: UserSettings = {
    name: 'Milton',
    emailOffers: true, 
    interfaceStyle: 'dark',
    subscriptionType: 'Annually',
    note: 'Here are some notes...',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
