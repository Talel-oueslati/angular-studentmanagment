import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  id: number;
  nameDisplay:any;
 student: Student=new Student();
  constructor(private router: Router,private route:ActivatedRoute,
    private studentservice:StudentService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.studentservice.getstudentbyid(this.id).subscribe(data => {
      this.student=data;
    })
  }
  onSubmit(){
    this.studentservice.updatestudent(this.id,this.student).subscribe(data =>{
      this.gotostudentlist();
    })
  }
  gotostudentlist(){
    this.router.navigate(['/students']);
     }

}
