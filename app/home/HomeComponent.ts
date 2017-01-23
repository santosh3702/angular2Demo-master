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
        {name: "Demo","url": 'https://github.com/sntripathi01/demo.git',"branch": 'master',"user": '',"password":'',"showPass":false,"showFail":false,"showProgress":false,"isDisabled":false,"log":''},
        {name: "Project2", "url": 'https://github.com/sntripathi01/demo.git',"branch": 'master',"user": 'sntripathi01',"password":'gCommon11',"showPass":false,"showFail":false,"showProgress":false,"isDisabled":false,"log":''},
    ];
    buildLog = '';
    constructor(private buildService: BuildService) { }
    public clickedItem = {name: ""};
    onItemClicked(Project:any) {
      // alert(Project.url);
        Project.showProgress = true;
        Project.showPass = false;
        Project.showFail= false;
        Project.isDisabled = true;
        this.buildLog= '';
        this.buildService.doBuild(Project).subscribe(data =>{
        //alert("Data from Service Call" +data.status)
            this.buildLog= data.log;
          //  alert( this.buildLog);
        if(data.status == "PASS"){
            //alert("okkkkkk");
            Project.showPass = true;
            Project.showProgress = false;
            Project.showFail= false;


        }else{
            Project.showPass = false;
            Project.showProgress = false;
            Project.showFail = true;
            Project.log= data.l

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


