import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { moduleRoutingComponent1 }    from './component1';
import { moduleRoutingComponent2 }  from './component2';

//import { AService } from './a.service';

import { ChildRoutingModule } from './child.Routing' //<-- import
@NgModule({
  imports: [
    CommonModule,
    ChildRoutingModule //<-- import
  ],
  declarations: [
    moduleRoutingComponent1,
    moduleRoutingComponent2
  ],
  //providers: [ AService ]
})
export class ChildModule {}