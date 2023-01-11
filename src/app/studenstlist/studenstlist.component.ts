import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studenstlist',
  templateUrl: './studenstlist.component.html',
  styleUrls: ['./studenstlist.component.css']
})
export class StudenstlistComponent implements OnInit {

  student: Student[];
  firstname:String;

    constructor(private studentservice:StudentService, private router: Router) { }

    ngOnInit(): void {
      this.studentservice.getstudents().subscribe(data => {
        this.student= data;
        });

    }
      printer(){
        window.print();
      }

    Search(){
      if(this.firstname!=""){
        this.student=this.student.filter(res=>{
          return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
        });
      } else if(this.firstname== ""){
    this.ngOnInit();
      }

    }
    key: String ='firstname';
    reverse:boolean=false;
    sort(key: String){
      this.key=key;
      this.reverse= !this.reverse;
    }
    updatestudent(id: number){
      this.router.navigate(['updatestudent', id]);

    }

  }


