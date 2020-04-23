import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberGetComponent } from './member-get/member-get.component';
import { AppRoutingModule } from './app-routing.module';
 
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { MemberService } from './member.service';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, SlimLoadingBarModule, ReactiveFormsModule, HttpClientModule],
  declarations: [ AppComponent, HelloComponent, MemberAddComponent, MemberEditComponent, MemberGetComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MemberService]
})
export class AppModule { }