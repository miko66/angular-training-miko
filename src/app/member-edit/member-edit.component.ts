import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  angForm: FormGroup;
  member: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ms: MemberService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      bio: ['', Validators.required],
     age: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  updateMember(name, bio, age) {
    this.route.params.subscribe(params => {
      this.ms.updateMember(name, bio, age, params.id);
      this.router.navigate(['members']);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ms.editMember(params[`id`]).subscribe(res => {
        this.member = res;
      });
    });
  }
}
