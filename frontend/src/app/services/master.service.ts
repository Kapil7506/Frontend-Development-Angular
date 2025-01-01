import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../model/interface/role';
import { Profile } from '../model/class/Profile';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }


  getDesignation():Observable<Profile>{
    return this.http.get<Profile>("http://127.0.0.1:8000/users/")
  }


}

