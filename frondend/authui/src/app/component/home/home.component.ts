import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  param: any;
  
  constructor( private activatedRoute: ActivatedRoute, private service: ServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.param = data.id;
      console.log(this.param)
    });
  
  
  
   if(this.param){
      this.service.addprofile(this.param);
      
    } 
   
   
  }
}