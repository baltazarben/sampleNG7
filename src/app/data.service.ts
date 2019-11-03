import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
   getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }
  
  addCustomerSNS(postObject) {
	
return this.http.post('https://pnm4eje0ti.execute-api.us-west-2.amazonaws.com/test/customertopic', postObject, {headers: {'Content-Type': 'application/json','Authorization':'None', 'Access-Control-Allow-Origin':'*'}});	
  }
	
}
