/**
 * Created by stripathi1 on 1/17/2017.
 */
import { Component,OnInit  } from '@angular/core';

import { BuildService } from './BuildService';
@Component({
    selector: 'app',
    //template: `
      //     <ul>
   //   <li *ngFor="let Item of Items">
    //  <td>  {{ Item.name }}  <td>{{ Item.url }}</td>
    //  </li>
    //  </ul>
    //       <input type="text" [(ngModel)]="clickedItem.name">
  // `
  templateUrl: "app/home/home.html",
    providers: [BuildService]
})
export class HomeComponent  {

    public Projects = [
        {logData:'log',name: "Demo","url": 'https://github.com/sntripathi01/demo.git',"branch": 'master',"user": '',"password":'',"showPass":false,"showFail":false,"showProgress":false,"isDisabled":false},
        {name: "mapstruct", "url": 'https://github.com/sntripathi01/mapstruct.git',"branch": 'master',"user": '',"password":'',"showPass":false,"showFail":false,"showProgress":false,"isDisabled":false,logData:'log1'},
    ];
    buildLog = '';
    constructor(private buildService: BuildService) { }
    public clickedItem = {name: ""};
    showLog(Project :any){
        //alert(Project.logData +" log  "+Project.url);
        this.buildLog= Project.logData;
    }
    onItemClicked(Project:any) {
      // alert(Project.url);
        Project.showProgress = true;
        Project.showPass = false;
        Project.showFail= false;
        Project.isDisabled = true;
        this.buildLog= '';
        this.buildService.doBuild(Project).subscribe(data =>{
        //alert("Data from Service Call" +data.status)

            Project.logData= data.log;

        if(data.status == "PASS"){

            Project.showPass = true;
            Project.showProgress = false;
            Project.showFail= false;


        }else{
            Project.showPass = false;
            Project.showProgress = false;
            Project.showFail = true;


        }
            Project.isDisabled = false;
        });


        /*this.buildService.doBuild(Item.url).subscribe(
            davis => console.log(devis)
            );*/

    }

    ngOnInit() {
    }
}


