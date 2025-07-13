import { Component } from "@angular/core";


@Component({ 
    selector:'display-data',
    templateUrl:'./datamodule.component.html',

 })

 export class DisplayData
 {
     title="this is the title section";
     dispaly=false;

     sayHello():void 
     {
         alert("button click ");
     }
 }