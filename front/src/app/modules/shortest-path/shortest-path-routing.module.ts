/* Routing common modules */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Components */
import { ShortestPathComponent } from './components/shortest-path.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: ShortestPathComponent,
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ShortestPathRoutingModule { }
