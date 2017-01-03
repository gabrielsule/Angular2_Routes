import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
//components
import { InicioComponent } from './routes/inicio.component';
import { NosotrosComponent } from './routes/nosotros.component';
import { PageNotFoundComponent } from './routes/pagenotfound.component';

//routes
const appRoutes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, InicioComponent, NosotrosComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
