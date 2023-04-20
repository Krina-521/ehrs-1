import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Category{
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent {
  // categoriesControl = new FormControl([]);
  // categories: string[] = ['Doctor', 'Patient', 'Nurse', 'Accountant', 'Laboratorist', 'Pharmacist', 'Receptionist'];

  // onCatRemoved(cat: string){
  //   const categories = this.categoriesControl.value as string[];
  //   this.removeFirst(categories, cat);
  //   this.categoriesControl.setValue(categories);
  // }

  // private removeFirst(array: string[], toRemove: string): void{
  //   const index = array.indexOf(toRemove);
  //   if(index !== -1){
  //     array.splice(index, 1);
  //   }
  // }
}
