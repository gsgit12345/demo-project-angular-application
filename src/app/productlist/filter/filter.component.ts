import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() all:number=0;
  @Input() inStock:number=0;
  @Input() outStock:number=0;

  @Output() radioButtonChanged:EventEmitter<string> =new EventEmitter<string>(); // radioButtonChanged is the custome event

  selectedRadioButton:string="false";

  public onChangeEventt()
  {
    //console.log(this.selectedRadioButton);
    //console.log(this.radioButtonChanged);

    this.radioButtonChanged.emit(this.selectedRadioButton);
  }

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from Child!');
  }

}
