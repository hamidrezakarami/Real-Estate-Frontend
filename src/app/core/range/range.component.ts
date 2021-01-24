import { Component, Input, Output, EventEmitter, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})

export class RangeComponent implements OnDestroy{

  @Input() name=this.makeId();
  @Input() range;
  @Input() disable;  
  h1: number = 0;
  h2: number = null;
  initCompleted: boolean = false;


  @Output() startTime1 = new EventEmitter();
  @Output() startTime2 = new EventEmitter();

  clear(){
    if (document.getElementById("containerID" + this.name) != null) {         
      this.h2 = document.getElementById("containerID" + this.name).clientWidth;
      this.h1 = 0;
      this.refreshHandlers();
    }
  }

  pixelToPercent(p: number): string | undefined{
    return (100 * p / document.getElementById("containerID" + this.name).clientWidth).toString() + '%';
  }

  percentToPixel(p: string): number {
    let percent = Number(p.replace('%', '')) / 100;    
    return document.getElementById("containerID" + this.name).clientWidth * percent;
  }

  getIndex(handlerIndex: number): number {
    let lh= Number(document.getElementById("left_handler" + this.name).style.left.replace('%', '')) / 100;
    let rh= Number(document.getElementById("right_handler" + this.name).style.left.replace('%', '')) / 100;
    let  step= 100/(this.range.length-1);

    if (handlerIndex == 0) {      
      return Math.floor(100*lh/step);
    }
    else if (handlerIndex == 1) {      
      return  Math.floor(100*rh/step);
    }
    
    
    
  }

  ngOnDestroy() {
    
  }

  ngAfterViewInit() {
    if (this.h2 == null && document.getElementById("containerID" + this.name) != null) {
      this.h2 = document.getElementById("containerID" + this.name).clientWidth;
    }
    this.refreshHandlers();
    let id = this.name;
    document.addEventListener('mouseup', function () {
      if (document.getElementById("left_handler" + id) != null) {
        document.getElementById("left_handler" + id).classList.remove("clicked");
        document.getElementById("right_handler" + id).classList.remove("clicked");
      }
    });

    let my: any = this;
    window.addEventListener('resize', function () {
      if (my.initCompleted == true) {
        if(document.getElementById("left_handler" + my.name)!=null){
        my.h1 = my.percentToPixel(document.getElementById("left_handler" + my.name).style.left);
        my.h2 = my.percentToPixel(document.getElementById("right_handler" + my.name).style.left);
    
        my.refreshHandlers();
        }
      }
    })
  }



  refreshHandlers(): boolean {
    if (document.getElementById("chosenLineID" + this.name) != null) {
      document.getElementById("chosenLineID" + this.name).style.left = this.pixelToPercent(this.h1);
      document.getElementById("chosenLineID" + this.name).style.width = this.pixelToPercent(this.h2 - this.h1);
      document.getElementById("left_handler" + this.name).style.left = this.pixelToPercent(this.h1);
      document.getElementById("right_handler" + this.name).style.left = this.pixelToPercent(this.h2);
      if (this.disable == false) {
        document.getElementById("startTimeID" + this.name).textContent = " ";
        document.getElementById("endTimeID" + this.name).textContent = " ";
      }
      else {
        document.getElementById("startTimeID" + this.name).textContent = this.range[this.getIndex(0)];
        document.getElementById("endTimeID" + this.name).textContent = this.range[this.getIndex(1)];
      }

      this.startTime1.emit(this.getIndex(0));
      this.startTime2.emit(this.getIndex(1));
      return true;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    
    if (changes.range != undefined)
      if (changes.range.currentValue !== undefined && changes.range.currentValue.length != 0) {
        this.range = changes.range.currentValue;
        this.refreshHandlers();
      }

    if (changes.disable !== undefined && changes.disable.currentValue != null) {

      if (document.getElementById("containerID" + this.name) != null) {
        this.h2 = document.getElementById("containerID" + this.name).clientWidth;
        this.h1 = 0;
        this.refreshHandlers();
      }
    }
  }

  ngOnInit() {
    this.initCompleted = true;
  }


  constructor() {
  }

  mouseMove(e) {
    if (this.disable == true) {
      if (document.getElementById("left_handler" + this.name).classList.contains("clicked")) {
        let offset = document.getElementById(this.name).offsetLeft;
        let x = e.pageX - offset - 24;
        this.h1 = Math.max(0, Math.min(x, this.h2));
        this.refreshHandlers();
      }
      if (document.getElementById("right_handler" + this.name).classList.contains("clicked")) {
        let width = document.getElementById("containerID" + this.name).clientWidth;
        let x = e.pageX - document.getElementById(this.name).offsetLeft - 24;
        this.h2 = Math.min(width, Math.max(x, this.h1));
        this.refreshHandlers();
      }
    }
  }
  mouseUp(id) {
    if (this.disable == true) {
      document.getElementById("left_handler" + id).classList.remove("clicked");
      document.getElementById("right_handler" + id).classList.remove("clicked");
    }
  }
  mousedown0(id) {
    if (this.disable == true) {
      document.getElementById("left_handler" + id).classList.add("clicked");
      document.getElementById("left_handler" + id).classList.add("zIndexUp");
      document.getElementById("right_handler" + id).classList.add("zIndexDown");
      document.getElementById("left_handler" + id).classList.remove("zIndexDown");
    }
  }
  mousedown1(id) {
    if (this.disable == true) {
      document.getElementById("right_handler" + id).classList.add("clicked");
      document.getElementById("right_handler" + id).classList.add("zIndexUp");
      document.getElementById("left_handler" + id).classList.add("zIndexDown");
      document.getElementById("right_handler" + id).classList.remove("zIndexDown");
    }
  }

  makeId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

}