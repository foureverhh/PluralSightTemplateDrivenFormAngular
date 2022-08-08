import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../model/user-settings';
@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit{

  originUserSettings: UserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annually',
    note: 'Here are some notes...',
  };

  subscriptionTypes:string[] = [];
  subObservable:Observable<string[]> = new Observable();

  userSettings: UserSettings = {...this.originUserSettings};
  postErrorMessage: any = '';
  postError: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSubscriptionTypes().subscribe(data => this.subscriptionTypes = data);
    this.subObservable = this.dataService.getSubscriptionTypes();
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit form.valid', form.valid);
    console.log('in onSubmit form.value', form.value);
    if(form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe({
        next: data => console.log('next', data),
        error: error => this.onHttpError(error),
        complete: () => console.log('complete')
      });
    }else {
      this.postError = true;
      this.postErrorMessage = "Pleas fix the errors above";
    }

  }

  onHttpError(errorResonse: any) {
    console.log('error', errorResonse);
    this.postError = true;
    this.postErrorMessage = errorResonse.message;
  }
}
