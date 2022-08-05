import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from '../model/user-settings';
@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originUserSettings: UserSettings = {
    name: 'Milton',
    emailOffers: true, 
    interfaceStyle: 'dark',
    subscriptionType: 'Annually',
    note: 'Here are some notes...',
  };

  userSettings: UserSettings = {...this.originUserSettings};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit', form.valid);
    console.log('in onSubmit', form.value);
  }
}
