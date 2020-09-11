import { Component, OnInit, Input } from '@angular/core';

import { Profile } from './profile.model';
import { ProfileService } from './profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [
    ProfileService
  ]
})
export class ProfileComponent implements OnInit {
  public profiles: Array<Profile>; 
  public selectProfile: Profile;
  private profileService: ProfileService;


  constructor(profileService: ProfileService) { 
    this.profileService = profileService; // Instancia o profileService dentro da classe
  }

  ngOnInit() {
    this.profiles = this.profileService.getProfiles(); // Requisiçao get profiles
  }
  
  // Mostra o perfil selecionado 
  public onSelect(profile: Profile): void {
    this.selectProfile = profile
  }

}
