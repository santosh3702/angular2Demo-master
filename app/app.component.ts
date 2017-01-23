import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app',
  template: `<div class="jumbotron">
    <div class="container">
<div class="col-sm-8 col-sm-offset-2">
 
    <router-outlet></router-outlet>`
//  templateUrl: "app/login/login.html"
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['login']);
  }
}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/