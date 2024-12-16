import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { VerifyComponent } from './verify/verify.component';
import { PackagesComponent } from './packages/packages.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './home-layout/layout/layout.component';
import { AddNewCardComponent } from './add-new-card/add-new-card.component';
import { SocialMediaAccountComponent } from './social-media-account/social-media-account.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    {path:'',component:WelcomeComponent},
    {path:'sign-in',component:SignInComponent},
    {path:'verify',component:VerifyComponent},
    {path:'packages',component:PackagesComponent},
    
    {
        path: 'link-myte',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
        // canActivate: [authGuard]
      },







];
