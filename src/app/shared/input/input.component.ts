import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string = 'Input';
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() value: string = '';
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
