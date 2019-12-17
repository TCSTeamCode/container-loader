import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { DefaultTimelineComponent } from './timeline/default-timeline/default-timeline.component';
import { DirectionLeftTimelineComponent } from './timeline/direction-left-timeline/direction-left-timeline.component';
import { DirectionRightTimelineComponent } from './timeline/direction-right-timeline/direction-right-timeline.component';


@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule,FormsModule, MaterialModule ],
  declarations: [ AppComponent, DefaultTimelineComponent, 
  DirectionLeftTimelineComponent, DirectionRightTimelineComponent], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
