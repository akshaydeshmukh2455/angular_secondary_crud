import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public common:CommonService) { }
  empList:Employee[];
  ngOnInit(): void {
     this.common.getData().subscribe((data:Employee[])=>{
       this.empList=data;
     })
  }
  deleteData(id:number){
    this.common.deleteData(id).subscribe();
    window.location.reload()
  }

  updateData(emp:Employee){
    this.common.e=Object.assign({},emp)
  }
}
