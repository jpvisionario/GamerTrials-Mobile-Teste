import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginuPage } from './loginu';

@NgModule({
  declarations: [
    LoginuPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginuPage),
  ],
})
export class LoginuPageModule {}
