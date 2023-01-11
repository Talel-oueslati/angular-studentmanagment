import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent implements OnInit {

    student:Student=new Student();
    id:number;
    route:any;

      constructor(private studentservice:StudentService,
        private router:Router) { }

  ngOnInit(): void {
  }

  supprimer(){
    this.studentservice.deletestudent(this.student.id).subscribe( data =>{
      console.log(data);
      this.gotochampionliste();
})
 }
 gotochampionliste(){
  this.router.navigate(['/students']);
   }
   onSubmit(){

    console.log(this.student);
    let confirmaction=confirm("Are you sure you want to delete server number "+this.student.id+" ?");
    if(confirmaction){
      this.supprimer();
    }else{
      alert("server delete canceled");
    }

  }

}

