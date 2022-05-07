import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.scss']
})

export class NftsComponent implements OnInit {
  nftData:any =[];
  ItemClicked:any; 
 
  getdata(){
    fetch('https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xa41B58Adcd09C7555941Ad2c8eA8e0a10F2Fa425&order_direction=asc&offset=0&limit=6')
   .then(response =>response.json())
   .then(response =>{
     const data = response.assets;
     this.nftData = data;
    //  console.log(this.nftData);
   })
   .catch(err =>console.error(err))
  }

  getId(data:any){
    this.ItemClicked = data;
    console.log("sending data", this.ItemClicked);
  }
  
  constructor() { }

  ngOnInit(): void {
   this.getdata();
    
  }

}
