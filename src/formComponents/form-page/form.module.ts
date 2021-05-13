import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormPageComponent],
  exports: [FormPageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FormModule {}
