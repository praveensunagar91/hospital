import { Routes,RouterModule } from "@angular/router";
import { HospitaldisplayComponent } from './hospitaldisplay/hospitaldisplay.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';


const arr:Routes=[

  {path:'display',component:HospitaldisplayComponent},
  {path:'add',component:AddDetailsComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'settings',component:SettingsComponent}

];

export const routing=RouterModule.forRoot(arr);
