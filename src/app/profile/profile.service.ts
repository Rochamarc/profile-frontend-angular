import { Injectable } from '@angular/core';

import { Profile } from './profile.model';

const PROFILES: Array<Profile> = [
  { id: 4, name: 'Thays', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 1, name: 'Marcos', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 10, name: 'Flavio', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 3, name: 'Filipe', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 2, name: 'Matheus', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 5, name: 'Fernanda', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 6, name: 'Malu', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 7, name: 'Bruno', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 9, name: 'Deia', nationality: 'Brazilian', birthdate: '24/021997' },
  { id: 8, name: 'Nila', nationality: 'Brazilian', birthdate: '24/021997' },
];

@Injectable()
export class ProfileService {

  public getProfiles(): Array<Profile>{
    return PROFILES;
  }

  public deleteProfile(profile: Profile):void  {
    //PROFILES.filter(({ id }) => id == profile.id));
    let index = PROFILES.indexOf(profile);
    delete PROFILES[index];
  }
}
