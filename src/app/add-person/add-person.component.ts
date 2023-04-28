import { Component } from '@angular/core';
import { PersonHttpService } from '../http-service';
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';
import { Person } from '../model/person';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  response:any;
  idFormControl: FormControl;
  ageFormControl: FormControl;
  nameFormControl:FormControl;
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

  createPerson(){
    
    const person : Person = {
      id : '1',
      age : this.personForm.get("age")?.value,
      name : this.personForm.get("name")?.value
  };
  this.httpService.create(person).subscribe({
    next: response => {
      this.response = response;
    },
    error: error => {
      this.error = error.error;
    },
    complete: () => {
      
    }
  });;
  }
 



onSubmitModelBased() {
 
}

  ngOnInit() {

  }
}
