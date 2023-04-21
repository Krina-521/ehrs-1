import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

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
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};


  constructor(){}

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];

    this.selectedItems = [
      { item_id: 4, item_text: 'Navsari' }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }

  onItemSelect(ev: any){

  }
  onSelectAll(ev: any){

  }
}
