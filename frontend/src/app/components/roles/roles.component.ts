import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { IResponse, IUser } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  roleList : IUser [] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    debugger;
    this.http.get<IResponse>("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      debugger;
      this.roleList=res;
    })
  }
}































































































































































//   firstname: string = "Angular";
//   angularVersion = "version 18";
//   version:number = 18;
//   isactive: boolean=false;
//   currentdate: Date = new Date();
//   inputType: string = "button";
//   State: string = '';

//   showAlert() {
//     alert("Welcome angular")
//   }
//   showmessage(message:string){
//     alert(message)
//   }
