import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CrossControlValidatorService {

  constructor() { }

  validator(fName="Claire", lName="Wang"): any {
    return (fg: FormGroup) => {
      if (fg.get('firstName').value == fName) {
        if (fg.get('lastName').value == lName) {
          return null;
        } else {
          return {'invalid': 'First name is Claire but last name is not Wang!'};
        }
      }
    }
  }

}
