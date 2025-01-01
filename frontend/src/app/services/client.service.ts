import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, Employee, IResponse } from '../model/interface/role';
import { Profile } from '../model/class/Profile';
import { environment } from '../../environments/environment.development';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients():Observable<Profile>{
    return this.http.get<Profile>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT)
  }

  getAlluser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getAllEmployee():Observable<Employee>{
    return this.http.get<Employee>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMP)
  }

  addUpdate(obj:Profile):Observable<Profile>{
    return this.http.post<Profile>(environment.API_URL + "profiles/", obj)
  }
  deleteById(id:number):Observable<Profile>{
    return this.http.delete<Profile>(environment.API_URL + "profile/" + id)
  }
  addclientprojectUpdate(obj:Profile):Observable<APIResponse>{
    return this.http.post<APIResponse>(environment.API_URL + "project/", obj)
  }
}
