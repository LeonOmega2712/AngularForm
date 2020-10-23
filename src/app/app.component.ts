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
  title = 'AngularForm';

  formBuilder: FormGroup;

  group: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.required]),
    civilState: new FormControl("", [Validators.required]),
    sex: new FormControl("", [Validators.required]),
    comments: new FormArray([
      new FormGroup({
        comment: new FormControl("Add a comment here")
      })
    ]),
  });
}
