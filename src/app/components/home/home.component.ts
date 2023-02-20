import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
        AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <app-ng-style></app-ng-style>
      <br>
      <app-css></app-css>
      <br>
      <app-clases></app-clases>
      <br><br>
      <p [appResaltado] = "'orange'">
        Hola desde app component
      </p>
      <br>
      <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
   
    console.log("contructor");
    //debugger;
  }

  ngOnInit(): void {
    
    console.log("ngOnInit");
    //debugger;
  }
  ngOnChanges():void {
    
    console.log("ngOnChanges");
    //debugger;
  }
  ngDoCheck():void {
    
    console.log("ngDoCheck");
    //debugger;
  }
  ngAfterContentInit():void {
    
    console.log("ngAfterContentInit");
    //debugger;
  }
  ngAfterContentChecked():void {
    console.log("ngAfterContentChecked");
    //debugger;
  }
  ngAfterViewInit():void {
    console.log("ngAfterViewInit");
    //debugger;
  }
  ngAfterViewChecked():void {
    console.log("ngAfterViewChecked");
    //debugger;
  }
  ngOnDestroy():void {
    console.log("ngOnDestroy");
    //debugger;
  }

}
