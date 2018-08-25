import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {moduleRoutingComponent1  }    from './component1';
import { moduleRoutingComponent2 }  from './component2';

const ChildRoutes: Routes = [
  { path: 'a',  component: moduleRoutingComponent1 },
  { path: 'b', component: moduleRoutingComponent2 }
];

//taken from angular.io
//Only call RouterModule.forRoot in the root AppRoutingModule (or the AppModule if 
//that's where you register top level application routes). In any other module, you 
//must call the RouterModule.forChild method to register additional routes.
@NgModule({
  imports: [
    RouterModule.forChild(ChildRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ChildRoutingModule { }