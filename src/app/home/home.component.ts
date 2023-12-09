import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {GoogleMapsModule} from "@angular/google-maps";
import {NgForOf} from "@angular/common";
import {MapComponent} from "./map/map.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    GoogleMapsModule,
    NgForOf,
    MapComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {

}
