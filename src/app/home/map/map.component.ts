import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {GoogleMapsModule} from "@angular/google-maps";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-map',
  standalone: true,
    imports: [
        GoogleMapsModule,
        NgForOf
    ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit {
  @ViewChild('gmapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;

  lat: number = 42.497681;
  long: number = 27.470030;
  markers: any[] = [
    {
      position: {
        lat: 42.496004,
        lng: 27.469513
      },
      title: 'test',
      label: 'current state',
      options: {animation: google.maps.Animation.BOUNCE}
    }
  ];
  coordinates = new google.maps.LatLng(this.lat, this.long);
  mapOptions: google.maps.MapOptions = {center: this.coordinates, zoom: 16};

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
  }
}
