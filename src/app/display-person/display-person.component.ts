import { AfterViewInit, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import { PersonHttpService } from '../http-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Person } from '../model/person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-person',
  templateUrl: './display-person.component.html',
  styleUrls: ['./display-person.component.css']
})

export class DisplayPersonComponent {
  
test:any;

  person: any;
  allPeople: Person[] = [];
  id: number;
  buttonDisabled: boolean;
  idFormControl: FormControl;
  idForm: FormGroup;
  
  displayedColumns: string[] = ['id', 'name', 'age'];
  dataSource = new MatTableDataSource<Person>(this.allPeople);
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private httpService: PersonHttpService) { 
    this.id = 1;
    this.buttonDisabled = false;
    this.idFormControl = new FormControl('', [Validators.required,  Validators.pattern("^[0-9]{1,6}$")]);
    this.idForm = new FormGroup({
      id: this.idFormControl
  });
  }


  getPersonById() {
    this.httpService.getPerson(this.idForm.get("id")?.value).subscribe({
      next: response => {
        this.person = response;
      },
      error: error => {
        this.person = error.error;
      },
      complete: () => {
        
      }
    });
  }
  
  getAllPeople(){

      this.httpService.getAllPersons().subscribe(
        (response)=>{
          this.allPeople.length = 0;
          response.forEach((person)=> {this.allPeople.push(person);})
          this.dataSource.data = this.allPeople;
        }
    );

  }
  
  hasError(person: any) {
    return typeof person === 'string';
  }
  
}


