import { Routes } from '@angular/router';
import {RomaniaCultureComponent} from "./components/romania-culture/romania-culture.component";
import {BritishCultureComponent} from "./components/british-culture/british-culture.component";

export const routes: Routes = [
  { path: '', component: RomaniaCultureComponent },
  { path: 'Romania', component: RomaniaCultureComponent },
  { path: 'British', component: BritishCultureComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
