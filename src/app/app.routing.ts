import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ComponentAndTemplateComponent } from './component-and-template/component-and-template.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ParentComponent } from './ngfor/parent.component';
import { CustomerComponent } from './Observables/customer.component'

const routes: Routes =[
  { path: '',   redirectTo: 'component-and-template', pathMatch: 'full' },  
    { path: 'component-and-template',      component: ComponentAndTemplateComponent },
    { path: 'bindings',      component: BindingsComponent },
    { path: 'ngfor',      component: ParentComponent },
    { path: 'Observables',      component: CustomerComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    {
      path: '**',
      redirectTo: 'dashboard'
    } 
  ];
// const routes: Routes =[
//                                                                                                                                                vcm,c                
//   { path: '',
//     redirectTo: './component-and-template',
//     pathMatch: 'full' },  
//   { path: 'component-and-template',      component: ComponentAndTemplateComponent },
//   { path: 'bindings',      component: BindingsComponent },
//   { path: 'ngfor',      component: ParentComponent },
//   { path: 'dashboard',      component: DashboardComponent },
//   { path: 'user-profile',   component: UserProfileComponent },
//   {
//     path: '**',
//     redirectTo: 'dashboard'
//   } 
// ];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
