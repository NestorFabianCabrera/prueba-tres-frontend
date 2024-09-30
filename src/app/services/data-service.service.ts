import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private numbers: number[] = [];
  private numbersSubject = new BehaviorSubject<number[]>(this.numbers);

  getArray() {
    // Para poder obtener los valores del arreglo desde el componente
    return this.numbersSubject.asObservable();
  }

  addNumberToArray(num: number) {
    // Ingreso el número en el arreglo
    this.numbers.push(num);
    this.numbersSubject.next(this.numbers);
  }

  removeNumberFromArray(num: number) {
    // De los números voy a filtrar el número que estoy ingresando en el campo y luego lo borro del arreglo
    this.numbers = this.numbers.filter(n => n !== num);
    this.numbersSubject.next(this.numbers);
  }

  clearArray() {
    this.numbers = [];
    this.numbersSubject.next(this.numbers);
  }

  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
