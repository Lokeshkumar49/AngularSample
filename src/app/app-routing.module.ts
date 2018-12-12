import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "details", component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
