import { Component, OnInit } from '@angular/core';
import { TokenStorageService} from 'src/app/token-storage.service';
import { ServiceService} from 'src/app/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  token_val: any;

  constructor(private token: TokenStorageService, private service: ServiceService) { }

  ngOnInit(): void {

    this.service.getUserDetails().subscribe(response =>{
      this.currentUser = response;
      console.log(response);
    });
    this.token_val = this.token.getToken();
    console.log(this.token_val);
  }
  

}
