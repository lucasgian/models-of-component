import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'field-error-control',
  templateUrl: './field-error-control.component.html',
  styleUrls: ['./../login/login.component.css']
})
export class FieldErrorControlComponent implements OnInit {

  
  @Input() showError: boolean;
  @Input() field: string;
  @Input() minimum: string;

  constructor() { }

  ngOnInit() {
  }

}
