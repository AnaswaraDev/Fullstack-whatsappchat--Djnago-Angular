import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-currentuser',
  templateUrl: './currentuser.component.html',
  styleUrls: ['./currentuser.component.css']
})
export class CurrentuserComponent implements OnInit {
  userprofile: any;
  sideuser: any;

  constructor(private service: ServiceService) { }
  
  ngOnInit(): void {
    this.userprofile =this.service.getuser()
    console.log(this.userprofile)

   if(this.userprofile){
    this.getuser();
   }
   else{
     this.getcurrentuser();
   }

  }
  getuser(): void {
    this.service.geteachuser(this.userprofile).subscribe(response =>{
      this.sideuser = response; 
      // window.location.reload(); 
    });
  }

  getcurrentuser(): void {
    this.service.getUserDetails().subscribe(response =>{
      this.sideuser = response;
    });
  }

}





