import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonHttpService } from '../http-service';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../model/person';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent {
  person: any;
  allPeople: Person[] = [];
  id: number;
  buttonDisabled: boolean;
  idFormControl: FormControl;
  idForm: FormGroup;
  
  displayedColumns: string[] = ['select','id', 'age'];
  dataSource = new MatTableDataSource<Person>(this.allPeople);
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);

 clickedRows = new Set<Person>();
 initialSelection = [];
 allowMultiSelect = true;
 selection = new SelectionModel<Person>(this.allowMultiSelect, this.initialSelection);

  ngAfterViewInit() {
  
    this.dataSource.paginator = this.paginator;
   // this.getAllPeople();

  }
  
  constructor(private httpService: PersonHttpService) { 
    this.id = 1;
    this.buttonDisabled = false;
    this.idFormControl = new FormControl('', [Validators.required,  Validators.pattern("^[0-9]*$")]);
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
  

clickedRow(person : any){
  if(this.clickedRows.has(person)){
    this.clickedRows.delete(person)
  }else{
    this.clickedRows.add(person);
  }
}

  hasError(person: any) {
    return typeof person === 'string';
  }
 
  

/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected == numRows;
}



/** Selects all rows if they are not all selected; otherwise clear selection. */
toggleAllRows() {
  if(this.isAllSelected()){
    this.selection.clear()
    this.clickedRows.clear();
  }else{
    this.dataSource.data.forEach(row => {this.selection.select(row); this.clickedRows.add(row)})};
  }



  delete(){
    this.clickedRows.forEach(
      person => {
        console.log("IDS TO DELETE:  " + person.id);
        this.httpService.delete(person.id).subscribe({
          next: response => {
       
          },
          error: error => {
       
          },
          complete: () => {
            console.log('Request complete');
          }
        });
        this.dataSource.data.push(person);
        this.selection.clear();
      }
    );
      
  }

}

