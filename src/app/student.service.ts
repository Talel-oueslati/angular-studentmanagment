import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL="http://localhost:8099/api/getstudents";
  private baseURL1="http://localhost:8099/api/addstudent";
   private baseURL2="http://localhost:8099/api/deletestudent";
   private baseURL3="http://localhost:8099/api/updatestudent";
   private baseURL4="http://localhost:8099/api/onestudent";


  constructor(private httpClient:HttpClient) { }

  getstudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }
  createstudent(student:Student):Observable<any>{
    return this.httpClient.post(`${this.baseURL1}`,student)
  }
  deletestudent(id: number):Observable<any>{
    return this.httpClient.delete(`${this.baseURL2}/${id}`);
  }
  updatestudent(id: number,student:Student):Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${id}`,student);
  }
  getstudentbyid(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseURL4}/${id}`);
  }
}
