import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PostComponent]
})
export class PostModule { }
