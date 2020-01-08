import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardListComponent } from './view/card-list/card-list.component';

import { MatToolbarModule, MatGridListModule } from '@angular/material';
import { ExamsApiService } from './service/exam/exam-api.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: CardListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatGridListModule
  ],
  providers: [ExamsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
