import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
  FormArray,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formBuilder: FormGroup;
  sex = 'Masculino';
  group: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, this.validateAge]),
    civilState: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    comments: new FormArray([
      new FormGroup({
        comment: new FormControl(''),
      }),
    ]),
  });

  onClickGroup(): void {
    console.log(this.group);
    const validForm = this.group.valid;
    if (validForm) {
      alert('Fromulario correcto');
    } else {
      alert('Fromulario incorrecto');
    }
  }
  onAddComment() {
    (this.group.get('comments') as FormArray).push(
      new FormGroup({
        title: new FormControl(),
        comment: new FormControl(),
      })
    );
  }
  onRemoveComment(index: number) {
    (this.group.get('comments') as FormArray).removeAt(index);
  }
  getComments() {
    return (this.group.get('comments') as FormArray).controls;
  }

  validateAge(control: AbstractControl) {
    const age = control.value;
    let error = null;
    if (age < 18) {
      error = { ...error, menor: 'Eres un escuincle' };
    }
    if (!parseInt(age, 16)) {
      error = { ...error, letras: 'El campo debe contener solo numeros' };
    }
    return error;
  }

  getError(controlName: string, key: string, value: string): string {
    let error = '';
    const control = this.group.get(controlName);
    if (control.dirty && control.errors[key]) {
      error = value;
    }
    return error;
  }
}
