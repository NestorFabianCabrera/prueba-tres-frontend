import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data-service.service";

@Component({
  selector: 'app-receiver-component',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.scss']
})
export class ReceiverComponent implements OnInit {
  numbers: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getArray().subscribe(numbers => {
      this.numbers = numbers;
    });
  }
}
