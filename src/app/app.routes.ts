import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'home/:id', component: DetailsComponent},
  {path:'**', component: NotfoundComponent}
];
