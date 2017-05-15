import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { PostComponent } from './post.component';

const routes: Routes = Route.withShell([
  { path: 'new-post', component: PostComponent, data: { title: 'New Post' } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
