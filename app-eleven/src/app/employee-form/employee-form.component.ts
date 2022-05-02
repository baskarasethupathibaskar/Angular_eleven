import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { rangeValidator, emailMatchValidator } from '../myValidator';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  employeeFormGroup: FormGroup;

  empRecord: any = {
    firstName: 'baskar',
    lastName: 's',
    email: 'bass0126@gmail.com',
    mobile: '0987654321',
  };

  constructor(private fb: FormBuilder) {
    this.employeeFormGroup = this.fb.group({
      firstName: [
        this.empRecord.firstName,
        [Validators.required, Validators.minLength(3)],
      ],
      lastName: '',
      emailGroup: this.fb.group(
        {
          email: [
            this.empRecord.email,
            [Validators.required, Validators.email],
          ],
          confirmEmail: ['', [Validators.required, Validators.email]],
        },
        { validators: emailMatchValidator }
      ),
      mobile: [''],
      sendNotification: ['email'],
      range: ['', [rangeValidator(10, 20)]],
    });
  }

  ngOnInit(): void {}
  // ! is non-null assertio operator(post-fix expression)
  // -it just saying to type checker that you sure that a is ,not null or undefined.
  // the operation a! produces a value of the type of a with,null and undefined excluded
  // if a is of type of string then a! ensure that it will return
  // a string value,and not NULL, or UNDIFINED
  get firstName() {
    return this.employeeFormGroup.get('firstName')!;
  }
  get email() {
    return this.employeeFormGroup.get('email')!;
  }
  get range() {
    return this.employeeFormGroup.get('range')!;
  }
  get emailGroup() {
    return this.employeeFormGroup.get('emailGroup')!;
  }

  loadEmployee() {
    let data = {
      firstName: 'Baskar',
      lastName: 'S',
      mobile: '0987654321',
    };
    this.employeeFormGroup.patchValue(data);
  }
  doNotification(msgtype: any) {
    if (msgtype === 'sms') {
      let mobileControl = this.employeeFormGroup.get('mobile');
      mobileControl?.setValidators([
        Validators.required,
        rangeValidator(8000000000, 9999999999),
      ]);
      mobileControl?.updateValueAndValidity();
    }
  }

  get mobile() {
    return this.employeeFormGroup.get('mobile')!;
  }
}
