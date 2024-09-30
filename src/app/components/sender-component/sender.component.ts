import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from "../../services/data-service.service";

@Component({
  selector: 'app-sender-component',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.form = this.fb.group({
      numberToAdd: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      numberToRemove: ['', [Validators.pattern(/^[0-9]+$/)]]
    });
  }

  addNumber() {
    if (this.form.get('numberToAdd')?.valid) {
      // Obtengo el valor del campo y lo convertiré a un número
      const numberToAdd = Number(this.form.get('numberToAdd')?.value);
      // Lo agrego al arreglo
      this.dataService.addNumberToArray(numberToAdd);
      // Reseteoo
      this.form.get('numberToAdd')?.reset();
    }
  }

  generateRandomNumber() {
    const randomNumber = this.dataService.generateRandomNumber(1, 100);
    this.dataService.addNumberToArray(randomNumber);
  }

  removeNumber() {
    if (this.form.get('numberToRemove')?.valid) {
      const numberToRemove = Number(this.form.get('numberToRemove')?.value);
      this.dataService.removeNumberFromArray(numberToRemove);
      this.form.get('numberToRemove')?.reset();
    }
  }

  clearArray() {
    this.dataService.clearArray();
  }

}
