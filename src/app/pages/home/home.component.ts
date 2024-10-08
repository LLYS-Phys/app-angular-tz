import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CardHomeComponent } from '../../reusable-components/card-home/card-home.component';
import { Category } from '../../category.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
  host: {'class': 'homePage'}
})
export class HomeComponent implements OnInit {
  categories: Category[] = []

  ngOnInit() {
    this.categories = [
      {
        id: 0, 
        name: 'Satellite Phones', 
        image: 'satellite_phones.png', 
        additional_info: `Satellite phones, with worldwide coverage, especially if you have no or only partial mobile coverage in undeveloped regions.
          Satellite calls are useful in a different way to achieve cost certainty with globally defined tariffs and thus to avoid roaming costs.
          However, the coverage of the individual satellite networks differs significantly.`, 
        path: ''
      },
      {
        id: 1, 
        name: 'Sim Cards & Airtime', 
        image: 'sim_cards,_airtime.png', 
        additional_info: `You'll need a SIM card for the operation of most telephones and terminals.
          Exceptions are some Iridium modems that only support the Iridium SBD service and that are identified by device number (IMEI).
          For prepaid and postpaid contracts different SIM cards are required.`, 
        path: ''
      },
      {
        id: 2, 
        name: 'Docking Stations', 
        image: 'docking_stations.png', 
        additional_info: `Docking Stations (or dockers, docks...) allow the operation of satellite phones in closed spaces, vehicles, ships and aircraft by connecting to an external antenna with a corresponding antenna cable.
          Additional functions include the connection to telephone systems (PABX, POTS), data connection via USB or WLAN as well as emergency buttons in any length of loop.`, 
        path: ''
      },
      {
        id: 3, 
        name: 'Modems & Terminals', 
        image: 'modems,_terminals.png', 
        additional_info: `Iridium SBD, Inmarsat Cobham BGAN, Inmarsat Hughes BGAN. If your focus in satellite communications is on data transmission, you will decide for Iridium SBD designed for smaller amounts of data and transfer rates e.g. for measuring stations and object tracking.
          With larger amounts of data and higher data rates one speaks of terminals, which are differentiated between land and maritime use and provide features such as distress message, machine control M2M, analogue and VoIP telephony, POTS, PABX telephone system connection, fax, Internet, streaming, tracking, provide Wi-Fi.`, 
        path: ''
      },
      {
        id: 4, 
        name: 'Maritime Solutions', 
        image: 'maritime_solutions.png', 
        additional_info: '', 
        path: ''
      },
      {
        id: 5, 
        name: 'Starlink', 
        image: 'starlink.png', 
        additional_info: `Starlink is a satellite internet constellation operated by American aerospace company SpaceX, providing coverage to over 70 countries.
          Starlink provides satellite-based internet connectivity to underserved areas of the planet.`, 
        path: ''
      },
      {
        id: 6, 
        name: 'Satellite Two-Way Radios', 
        image: 'satellite_two-way_radios.png', 
        additional_info: 'Satellite PTT (Push-To-Talk) is a two-way radio system that uses the Iridium satellite network.', 
        path: ''
      },
      {
        id: 7, 
        name: 'Accessories', 
        image: 'tracking.png', 
        additional_info: '', 
        path: ''
      },
      {
        id: 8, 
        name: 'Tracking', 
        image: 'accessories.png', 
        additional_info: `We also operate our own tracking platform on which we can connect your devices. Record your trip and display it on a world map for others, password protected or public.
          An export for archiving and the simple communication via a text chat are further helpful functions. In the professional sector, fleets can be managed with a variety of options such as geofences for leaving or arriving, warning and emergency messages, remote device control and more.`, 
        path: ''
      }
    ]
  }
}
