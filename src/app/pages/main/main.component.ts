import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public userForm!: FormGroup;
  public submitted: boolean = false;
  constructor() {}

  ngOnInit(): void {
    const patternSpaces = /^(\s+\S+\s*)*(?!\s).*$/;
    const patternEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(patternSpaces),
        Validators.minLength(2),
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.pattern(patternSpaces),
        Validators.minLength(2),
      ]),
      surname2: new FormControl('', [
        Validators.pattern(patternSpaces),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(patternEmail),
      ]),
    });
  }

  public onSubmit(): void {
    this.submitted = true;
  }
}
