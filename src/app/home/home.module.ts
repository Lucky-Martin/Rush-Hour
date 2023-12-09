import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcWBeIvyXBMnkZX5-dbZ0mvAVgM_kBUUU'
    })
  ]
})
export class HomeModule { }
