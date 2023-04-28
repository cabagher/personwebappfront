import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from  '@angular/common/http';
import { Person } from './model/person';
import { Observable, catchError, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PersonHttpService {

  url = 'http://cole-desktop:8080/webappwar/api/person/';
  persons: any;
  errors:String = "dsfdsf";
  errorA : any = new Error();
  constructor(private http: HttpClient) { 
   
  }


  getPerson(id: number) {
    return this.http.get(this.url + id)
  }


  getAllPersons () : Observable<Person[]>{
    return this.http.get<Person[]>(this.url  + "getAll");
  }
  
  delete(personsId: String){
    return this.http.delete(this.url + "delete/" + personsId);
  }

  create(person: Person){
    return this.http.post(this.url + "create", person);
  }

  edit(person: Person){
    return this.http.put(this.url + "edit/" + person.id, person);
  }


hasError(){
    if(this.errors != "a"){
      return true;
    }
    return false;
  }

getError(){
  return this.errors;
  }
  

  
}

