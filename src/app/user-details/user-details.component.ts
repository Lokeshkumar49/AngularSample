import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { User } from "../user";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit {
  userss: User[2] = [];
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getUsers().subscribe(
      res => {
        this.userss = res;
        console.log(this.userss);
      },
      err => {
        console.log(err);
      }
    );
  }

  // getUser(id) {
  //   console.log(id);
  //   this.data.getUser(id).subscribe(res => console.log(res));
  // }
}
