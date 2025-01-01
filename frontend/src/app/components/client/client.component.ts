import { Component, inject, OnInit } from '@angular/core';
import { Profile } from '../../model/class/Profile';
import { ClientService } from '../../services/client.service';
import { FormsModule } from '@angular/forms';
import { IResponse } from '../../model/interface/role';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from '../../resusableComponent/alert/alert.component';
import { MybuttonComponent } from '../../resusableComponent/mybutton/mybutton.component';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, DatePipe, JsonPipe, AsyncPipe, AlertComponent, MybuttonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  currentDate: Date =new Date();

  profileObj: Profile = new Profile();
  profileList : Profile[] = [];

  profileService = inject(ClientService);

  userList$ :Observable<any> = new Observable<any>;

  ngOnInit(): void {
    this.loadProfile();
    this.userList$ = this.profileService.getAlluser();
  }
  loadProfile(){
    this.profileService.getAllClients().subscribe((res:any)=>{
      this.profileList=res;
    })
  }
  onSaveClient(){
    debugger;
    this.profileService.addUpdate(this.profileObj).subscribe((res:any)=>{
      if(res = true){
        alert("Profile Created")
        this.loadProfile();
        this.profileObj = new Profile();
      } else {
        alert(res.message)
      }
    })
  }

  onEdit(data : Profile){
    this.profileObj = data;
  }

  onDelete(id : number){
    const isDelete = confirm("Are you sure want to delete");
    if (isDelete){
      this.profileService.deleteById(id).subscribe((res:any)=>{
        if(res = true){
          alert("Profile Deleted")
          this.loadProfile();
        } else {
          alert(res.message)
        }
      })
    }
  }
}
