import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { PostsComponent } from './posts.component';

const routes: Routes = Route.withShell([
  { path: 'posts', component: PostsComponent, data: { title: 'Posts' } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }