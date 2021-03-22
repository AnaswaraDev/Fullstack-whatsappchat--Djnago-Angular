
import { Component, OnInit } from '@angular/core';
import { ServiceService} from 'src/app/service.service';
@Component({
  selector: 'user-home',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  currentUser: any;
 users1:any;
 
  details: any;
  searchtext:string="";
  searchwork = true;
  users: any;

  constructor( private service: ServiceService) { }

  ngOnInit(): void {

    this.service.getUserDetails().subscribe(response =>{
      this.currentUser = response;
    });
    this.service.getAllUser().subscribe(response =>{
      this.users1 = response;
      
    }
    );
     

  }

  search1(){
    if (this.searchtext){
      this.search();
    }
    else{
      window.location.reload();
    }
     }
  search(){
    this.service.search(this.searchtext).subscribe(data => {
      this.users1 = data.user_serializer;
      // this.details = data.details_serializer;
      this.searchwork = true;
    },
    error => {
      console.log(error);
      this.searchwork = false;
    });
  }


}