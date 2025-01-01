import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-mybutton',
  imports: [],
  templateUrl: './mybutton.component.html',
  styleUrl: './mybutton.component.css'
})
export class MybuttonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() onBtnclicked = new EventEmitter<any>();

  onClick() {
    debugger;
    this.onBtnclicked.emit();
  }
}
