import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../home-layout/layout/layout.component';
import { AddNewCardComponent } from '../add-new-card/add-new-card.component';
import { SocialMediaAccountComponent } from '../social-media-account/social-media-account.component';
import { HomeComponent } from '../home/home.component';
import { SettingsComponent } from '../settings/settings.component';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { ContactsComponent } from '../contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default child route
      { path: 'home', component: HomeComponent },
      { path: 'new-card', component: AddNewCardComponent },
      { path: 'social-accounts', component: SocialMediaAccountComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'contacts', component: ContactsComponent }, // Example of child route
      // Example of child route
      // Example of child route
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}