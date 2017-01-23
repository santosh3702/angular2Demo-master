/**
 * Created by stripathi1 on 1/12/2017.
 */
import { Component ,Input} from '@angular/core';
import { LoginService } from './LoginService';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app',
    //template: `<h1>Hello {{name}}</h1>`
    templateUrl: "app/login/login.html",
    providers: [LoginService]

})
export class LoginComponent {

    name = 'Angular bhai';
    isValidUser: boolean;
    protected invalidUserMessage : String= ''
constructor(private loginService: LoginService, private router: Router,  private route: ActivatedRoute) { }

    onSubmit(form: any): void {
        //alert("Hello>");
      //  console.log('you submitted value:', form);
     this.isValidUser  =    this.loginService.authenticateUser(form.Username,form.Password);
        //alert("Hello>"+this.isValidUser);
        if(this.isValidUser){
            this.invalidUserMessage = ''
          // alert("True")
            this.router.navigate(['home']);
        }else{

            this.invalidUserMessage = 'Invalid User'
            //alert("false.."+this.isValidUser);
        }

        return;
    }



}


