import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  FormControl,
  NgForm,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;
  isLoadingResults = false;
  constructor(
    private router: Router,
    private data: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    console.log("form submitted");
    this.success = true;
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    this.data.addUser(form).subscribe(
      res => {
        this.router.navigate(["/register"]);
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
