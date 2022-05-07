import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnChanges {
  @Input() nftId:any;

  constructor() { }


  ngOnInit(){
    console.log("recived this data ",this.nftId)
  }

  ngOnChanges(change: SimpleChanges) {
    if (change['nftId']) {
      this.nftId = change['nftId'].currentValue;
    }
  }
}
