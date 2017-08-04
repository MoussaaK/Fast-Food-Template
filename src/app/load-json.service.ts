import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class LoadJsonService {
  constructor(public http:Http) {}

  getData() {
    return this.http.get("/assets/config.json")
    .map((res:Response) => res.json().Items); //records in this case
  }
}
