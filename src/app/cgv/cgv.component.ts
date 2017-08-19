
import { Http }               from '@angular/http';
import { Component }          from '@angular/core';
import { LoadJsonService }    from '../load-json.service';

@Component({
  selector: 'app-cgv',
  templateUrl: './cgv.component.html',
  providers: [LoadJsonService],
  styleUrls: ['./cgv.component.css']
})
export class CgvComponent {
  title = 'app';

  newDatas = [];
  special = [];
  cgv;
  i;
  constructor(private http:Http, private load: LoadJsonService) {
    this.load.getData().subscribe((datas) => {
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
      }
      this.cgv = this.special[2].content;
      console.log("cgv:", this.cgv);
      console.log("special",this.special);
      console.log("data : ", this.newDatas);
    },(err)=>{

    },()=>{

    });
  }

}
