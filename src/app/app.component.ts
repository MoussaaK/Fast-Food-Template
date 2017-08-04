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
      }
      console.log("data : ", this.newDatas);
    },(err)=>{


    },()=>{


    });
  }

}
