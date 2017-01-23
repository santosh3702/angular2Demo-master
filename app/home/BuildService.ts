/**
 * Created by stripathi1 on 1/18/2017.
 */
import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http'
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class BuildService {

    private baseUrl = 'http://localhost:8080';
   private  tempUrl  = "";
    private data: any;
    constructor(private http : Http){
    }

    doBuild(Project:any){
        // alert("service build"+Project.url);
      /*  let body  = this.http.get('http://localhost:8080/test').map((res:Response) => res.json()).subscribe(data => {
           alert(data.status);
        });;*/

        return this.http.post('http://localhost:8080/build', {"url": 'https://github.com/sntripathi01/demo.git',"branch": 'master',"user": 'sntripathi01',"password":'gCommon11'}).map((res:Response) => res.json());
        /*alert( this.http.get('http://localhost:8080/test').map((res:Response) => res.json()));
        this.http.get(this.tempUrl).map(res=>{
            alert("map");
            res.json()}).catch(this.handleerror);*/

       /* this.http
            .get(this.baseUrl+"/build?url="+url, {headers: this.getHeaders()})
            .map(this.data).catch(handleError);*/

    }

   /* private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
*/

   /* handleerror(error:Response)
    {
        alert("error");
        console.log("errorrrjhfdkghd");
        return Observable.throw(error.json().error || 'Server Error');
    }*/





}
