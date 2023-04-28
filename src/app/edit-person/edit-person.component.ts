import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonHttpService } from '../http-service';
import { Person } from '../model/person';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent {

  idFormControl: FormControl;
  ageFormControl: FormControl;
  nameFormControl: FormControl;
  
  personForm: FormGroup;
  error:any;

  constructor(private httpService: PersonHttpService) { 
    this.idFormControl = new FormControl('', [Validators.required,  Validators.pattern("^[0-9]{1,6}$")]);
    this.ageFormControl = new FormControl('', [Validators.required,  Validators.pattern("^[0-9]{1,3}$")]);
    this.nameFormControl = new FormControl('', [Validators.required,  Validators.pattern("^.{1,100}$")]);


    this.personForm = new FormGroup({
      id: this.idFormControl,
      age: this.ageFormControl,
      name: this.nameFormControl
  });
}

editPerson(){
  const person : Person = {
    id : this.personForm.get("id")?.value,
    age : this.personForm.get("age")?.value,
    name: this.personForm.get("name")?.value
};
this.httpService.edit(person).subscribe({
  next: response => {
   
  },
  error: error => {
    this.error = error.error;
  },
  complete: () => {
    
  }
});;

}

}