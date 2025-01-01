import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponse, Employee, profileproject } from '../../model/interface/role';
import { Profile } from '../../model/class/Profile';
import { AlertComponent } from '../../resusableComponent/alert/alert.component';
@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{

  projectForm: FormGroup = new FormGroup({
    ClientProjectId: new FormControl(0),
    projectName: new FormControl("",[Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(""),
    ExceptedEnddate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate : new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonPhoneno: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl("")
  })

  clientserv = inject(ClientService);
  EmpList: Employee[]=[];
  profileList: Profile[]=[];

  firstname = signal("Angular 20");
  projectList = signal<profileproject[]>([])
  ngOnInit(): void {
    const name = this.firstname();
    this.getAllClient();
    this.getAllEmployee();
  }

  changename(){
    this.firstname.set("Kapil")
  }

  getAllEmployee(){
    this.clientserv.getAllEmployee().subscribe((res:any)=>{
      this.EmpList = res
    })
  }
  getAllClient(){
    this.clientserv.getAllClients().subscribe((res:any)=>{
      this.profileList = res
    })
  }

  onSaveProject(){
    const formValue = this.projectForm.value;
    debugger;
    this.clientserv.addclientprojectUpdate(formValue).subscribe((res:any)=>{
      if(res= true){
        alert('project created sucess')
      } else {
        alert(res.message)
      }
    })
  }
}
