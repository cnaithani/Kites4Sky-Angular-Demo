import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ComponentAndTemplateComponent } from './component-and-template/component-and-template.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ParentComponent } from './ngfor/parent.component';
import {ChildModule} from './modules and routing/child.module'
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ChildModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ChartsModule,
  ],
  declarations: [
    AppComponent,
    ComponentAndTemplateComponent,
    ParentComponent,
    DashboardComponent,
    UserProfileComponent,
    BindingsComponent,
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
