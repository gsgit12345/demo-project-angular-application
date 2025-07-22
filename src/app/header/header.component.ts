import { Component, Input } from "@angular/core";


@Component({
    selector: "app-header",
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],

})
export class HeaderComponent {

    menuitem: string[] = ["aboutUs", "Product", "Services", "Profile"]
    @Input()
    search:string="";
    setSearchText(value) {
        this.search=value;
        console.log("hello"+this.search);
    }
}


