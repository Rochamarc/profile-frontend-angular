import { Component, OnInit } from '@angular/core';

import { Profile } from './profile.model';

const PROFILES: Array<Profile> = [
  { id: 1, name: 'Marcos', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 2, name: 'Matheus', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 3, name: 'Filipe', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 4, name: 'Thays', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 5, name: 'Fernanda', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 6, name: 'Malu', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 7, name: 'Bruno', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 8, name: 'Nila', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 9, name: 'Deia', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 10, name: 'Flavio', nationality: 'Brazilian', birthdate: '24/021997' },
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profiles; 
  public selectProfile;

  constructor() { 
    this.profiles = PROFILES;
  }

  ngOnInit() {
  }

  public onSelect(profile: Profile): void {
    this.selectProfile = profile
  }

}
