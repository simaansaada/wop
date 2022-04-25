import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mobileNumber:string='';
  prompt:{prompt:any};
  constructor() {
    window.addEventListener('beforeinstallprompt', function (e:any) {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.prompt = e;
      console.warn('sssss');
      console.log('beforeinstallprompt fired!');
    });
   }
  writenumber(number: number) {
    this.mobileNumber +=number.toString();
  }
  openChat(phoneNumber:string){
    const trimmedPhoneNumber = phoneNumber?(phoneNumber[0]=='0'?phoneNumber.slice(1):phoneNumber):'';
    window.open('https://wa.me/972'+trimmedPhoneNumber);
  }

  backspace(){
    this.mobileNumber = this.mobileNumber.substring(0,this.mobileNumber.length-1);
  }
  isntallAPP(){
    this.prompt.prompt();
  }
}
