import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { User } from "./user";
import { catchError, tap, map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  RegisterClick() {
    return console.log("clicked");
  }

  getUsers() {
    return; // this.httpClient.get<User>("http://localhost:61704/values");
  }

  getUser(id) {
    const url = `${"http://localhost:61704/values"}/${id}`;
    return this.httpClient.get<User>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<User>(`getProduct id=${id}`))
    );
  }

  addUser(user): Observable<User> {
    return this.httpClient
      .post<User>("http://localhost:61704/values", user, httpOptions)
      .pipe(
        tap((user: User) => console.log(`added product w/ id=${User}`)),
        catchError(this.handleError<User>("addProduct"))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
