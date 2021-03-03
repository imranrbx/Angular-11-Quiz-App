import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/counter.reducers';
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
