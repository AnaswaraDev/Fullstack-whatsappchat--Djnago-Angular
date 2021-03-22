import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

const logUrl = 'http://127.0.0.1:8000/api/login/';
const regUrl = 'http://127.0.0.1:8000/api/register/';
const Url = 'http://127.0.0.1:8000/api/';
const URL = 'http://localhost:8000/api/';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  userdet: any;
  

  constructor(private http: HttpClient) { }

  login(data:any): Observable<any>{
    return this.http.post(logUrl, data);
  }

  register(data:any): Observable<any>{
    return this.http.post(regUrl, data);
  }
  search(val:any): Observable<any>{
    return this.http.get(Url+'search/'+val);
  }
  getUserDetails(): Observable<any>{
    return this.http.get(Url+'userdetails/');
  }

  getAllUser():Observable<any>{
    return this.http.get(Url+'allusers/');  //all user login details
  }

 geteachuser(id: any): Observable<any> {
    return this.http.get(URL +'geteachuser/'+id);
  } 

 public addprofile(value:any):any{
 this.userdet= value;
 
 }

getuser():void{
  return this.userdet;
}

viewmessage(sender: any, receiver: any): Observable<any> {
  return this.http.get(Url+'viewmessage/'+ sender + '/' + receiver);

}

savemessage(data: any): Observable<any> {
  return this.http.post(URL +'savemessage/',data);

}


}
