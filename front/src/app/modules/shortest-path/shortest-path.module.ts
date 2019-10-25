import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from 'src/app/api/api.module';

/* Modules */
import { ShortestPathRoutingModule } from './shortest-path-routing.module';

/* Components */
import { ShortestPathComponent } from './components/shortest-path.component';

@NgModule({
  imports: [
    CommonModule,
    ShortestPathRoutingModule
  ],
  declarations: [
    ShortestPathComponent
  ],
  exports: [
    ShortestPathComponent
  ]
})
export class ShortestPathModule { }
