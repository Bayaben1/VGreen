import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnvironnementComponent } from './environnement/environnement.component';
import { SocialComponent } from './social/social.component';
import { GovernanceComponent } from './governance/governance.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
    { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'environnement', component: EnvironnementComponent },
  { path: 'social', component: SocialComponent },
  { path: 'governance', component: GovernanceComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }