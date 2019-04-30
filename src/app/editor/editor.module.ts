import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

import { EditorComponent } from './editor/editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    QuillModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    EditorComponent
  ]
})
export class EditorModule { }
