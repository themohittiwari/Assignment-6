import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialExampleModule } from '../../material.module';
import { MatIconModule } from '@angular/material/icon';
import { TabsComponent } from './tabs/tabs.component';
import { BaseService } from './base.service';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

let routers: Routes = [
  { path: '', component: TabsComponent },
  { path: 'employee/:id', component: FormComponent },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, TabsComponent, FormComponent],
  imports: [
    BrowserModule,
    MatIconModule,
    MaterialExampleModule,
    RouterModule.forRoot(routers),
    FormsModule,
  ],
  providers: [BaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
