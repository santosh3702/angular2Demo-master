/**
 * Created by stripathi1 on 1/16/2017.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    authenticateUser  ( user : String,password : String ) :boolean{
      //  alert(password + "Service "+user);

       // console(password+ " authenticateUser  "+user);
        if(user.toUpperCase() == "ADMIN"&& password == "123"){
            return true;
        }
        return false;
    }

}
