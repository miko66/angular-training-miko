import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ms: MemberService, private router: Router,) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      bio: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  addMember(name, bio, age) {
    this.ms.addMember(name, bio, age);
    this.router.navigate(['members']);
  }

  /**
	 * Save data
	 *
	 * @param withBack: boolean
	 */
	onSubmit() {
		//this.hasFormErrors = false;
		let request: any;
		const controls = this.angForm.controls;
		/** check form */
		if (this.angForm.invalid) {
			Object.keys(controls).forEach((controlName) =>
				controls[controlName].markAsTouched()
			);
			//this.hasFormErrors = true;
			return;
		}
    this.addMember(controls.name.value,controls.bio.value,controls.age.value)
    this.router.navigate(['members']);
	}

  ngOnInit(): void {
  }

}