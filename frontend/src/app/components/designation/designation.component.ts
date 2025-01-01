import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IDesignation, IResponse } from '../../model/interface/role';
import { error } from 'console';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
  designationList: IDesignation[] = [];
  isLoader: boolean = true;
  masterservice = inject(MasterService);

  ngOnInit(): void {
    debugger;
    this.masterservice.getDesignation().subscribe((result:any)=>{
      debugger;
      this.designationList = result;
      this.isLoader = false;
    }, error=>{
      alert("API error/ Network Down")
      this.isLoader = false;
    
    })
  }

}
