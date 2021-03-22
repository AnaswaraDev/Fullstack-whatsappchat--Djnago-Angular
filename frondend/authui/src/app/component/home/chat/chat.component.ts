import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  msg: any;
  sender: any;
  reciever: any;
  form ={
    message :'',
    sent :'',
    recieve :''

  }
  currentUser: any;
  viewmsg: any;
  receiver_img: any;
 


  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.reciever = this.service.getuser();
    
    if(this.reciever){
      this.getreceiver();
    }

  }
  getreceiver(){
    this.service.geteachuser(this.reciever).subscribe(response => {
      this.reciever = response;
      this.getsender();
    });
  } 

  getsender(){
    this.service.getUserDetails().subscribe(response =>{
      this.sender = response;
      this.view_message()
    });
  
  }
  
  send(){
    this.form.sent = this.sender.id;
    this.form.recieve = this.reciever.id;

    if (this.form.message){
      this.service.savemessage(this.form).subscribe(response => {
        //console.log(response);
      },
      error => {
        console.log(error);
      });
      
      window.location.reload();
    }
  }

  view_message(){
    this.service.viewmessage(this.sender.id, this.reciever.id).subscribe(response => {
      this.viewmsg = response;
      console.log(this.viewmsg)
    },
    error => {
      console.log(error);
    });
  }


} 
