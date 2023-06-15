import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public common:CommonService) { }

  ngOnInit(): void {
  }
  
  postData(emp:Employee){
    console.log(emp.id);
    if(emp.id==0)
    {
      this.common.postData(emp).subscribe();
    }
    else
    {
      this.common.updateData(emp).subscribe();

    }
    window.location.reload()
  }

  resetData(){

    this.common.e = Object.assign({},null);
 }
}
