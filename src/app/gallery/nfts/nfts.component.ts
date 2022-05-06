import { Component, OnInit } from '@angular/core';
import { CardData } from 'src/app/card-data';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss']
})

export class NftsComponent implements OnInit {
  nftData:any =[];
  ItemClicked:CardData[] = []; 
 
  getdata(){
    fetch('https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x617d411DE5a4D5b668EBAa22Edc7bCdbb88285c4&order_direction=desc&offset=0&limit=5')
   .then(response =>response.json())
   .then(response =>{
     const data = response.assets;
     this.nftData = data;
    //  console.log(this.nftData);
   })
   .catch(err =>console.error(err))
  }

  getId(data:any){
    this.ItemClicked.push(data);
    console.log("sending data", this.ItemClicked);
  }
  
  constructor() { }

  ngOnInit(): void {
   this.getdata();
    
  }

}
