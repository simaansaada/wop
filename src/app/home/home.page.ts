import { Component, HostListener } from '@angular/core';
import { BeforeInstallPromptEvent } from 'src/interfaces/before-install-prompt-event.interface';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mobileNumber:string='';
  beforeInstallEvent:BeforeInstallPromptEvent;
  canInstall:boolean = false;
  constructor() {

  }
  @HostListener('window:beforeinstallprompt',['$event'])
  BeforeInstallPrompt(e:BeforeInstallPromptEvent){
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();

    // Stash the event so it can be triggered later.
    this.beforeInstallEvent = e;
    this.canInstall = true;
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
    this.beforeInstallEvent.prompt();
  }
}
