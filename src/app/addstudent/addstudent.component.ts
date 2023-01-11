import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  student: Student= new Student();
  constructor(private studentservice: StudentService,
    private router: Router) { }

  ngOnInit(): void {
  }
  savestudent(){
    this.studentservice.createstudent(this.student).subscribe(data => {
      console.log(data);
      this.gotostudentlist();

    })
  }
gotostudentlist(){
  this.router.navigate(['/students']);
}
onSubmit(){
  console.log(this.student);
  this.savestudent();

}
}
