import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search: string = "";
  isActive: boolean = true;
  isDisabled = true;

  @Output()
searchTextChanged=new EventEmitter<string>()



  public updateMenShoes(event: any): void {
    this.search = event.target.value;
  }

  onSearchTextChanged()
  {
    this.searchTextChanged.emit(this.search)
  }

public toBeCalledInParent()
{
  console.log("this method would be called in parent using the template refernce")
}

tempRef(inpudtt:HTMLInputElement)
{
  this.search = inpudtt.value;

console.log("input value is:"+inpudtt.value);
}

@ViewChild('childElementdecorator') searchInputElement :ElementRef;

viewInputChiledecorator()
{

console.log("input value  using viewchild decorator is:"+this.searchInputElement.nativeElement.value);
}



}
