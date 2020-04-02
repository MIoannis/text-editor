import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextHandlerComponent} from './text-handler/text-handler.component';
import { AboutComponent} from './about/about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: TextHandlerComponent },
  { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
