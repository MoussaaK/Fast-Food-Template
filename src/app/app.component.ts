import { Component } from '@angular/core';
import { LoadJsonService } from './load-json.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LoadJsonService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  newDatas = [];
  i;
  special = [];
  zones_livraison;
  social;
  restau;
  liens;
  bg_img;
  levallois = [];
  colombes = [];
  constructor(private http:Http, private load: LoadJsonService) {
    this.load.getData().subscribe((datas) => {
      //this.datas = datas;
      for (let i = 0; i < datas.length; i++) {
        if(datas[i].type.startsWith('category'))
        {
          let item = datas[i];
          try {
            item.products = JSON.parse(item.products);
          }
          catch (e) {
            console.log(typeof item.products);
          }
          this.newDatas.push(item);
        }
        if(datas[i].special === true || datas[i].special === false){
          this.special.push(datas[i]);
        }
        if(datas[i].type === 'social'){
          this.social = datas[i];
        }
        if(datas[i].type === "global_config"){
          let global_config = datas[i].config;
          try {
            console.log("config: ", global_config);
            this.restau = JSON.parse(global_config);
            console.log("this.restau: ", this.restau);
          }
          catch (e) {
            console.log(typeof global_config);
          }
        }
        if(datas[i].type === 'livraison'){
          let item = datas[i];
          try {
            //console.log("zones de livraison: ", this.zones_livraison);
            this.zones_livraison = JSON.parse(item.config);
            //console.log("zones de livraison: ", this.zones_livraison);
          }
          catch (e) {
            console.log(typeof item.config);
          }

        }
      }
      this.bg_img  = this.restau.banner.bg_img;
      console.log(this.bg_img);
      console.log("Social", this.social);
      console.log("special",this.special);
      console.log("data : ", this.newDatas);
      console.log("zones de livraison: ", this.zones_livraison);
      for (let i = 0; i < this.zones_livraison.selected_cities.length; i++) {
          if(i < 5)
            this.colombes.push(this.zones_livraison.selected_cities[i]);
          else
            this.levallois.push(this.zones_livraison.selected_cities[i]);
      }

      console.log("colombes :", this.colombes);
      console.log("levallois :", this.levallois);
    },(err)=>{


    },()=>{


    });
  }


}
