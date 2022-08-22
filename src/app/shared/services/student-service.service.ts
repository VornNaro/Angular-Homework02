import { Student } from './../model/student';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable ,of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  studentob$ !: Observable<Student[]>;


  student_ls: Student[] = [
    {
      stu_name : "Vorn Naro",
      stu_gender : "Male",
      stu_subject: "Spring and Angular"
    },
    {
      stu_name : "Srey Sitharo",
      stu_gender : "Male",
      stu_subject: "Data Analytic"
    },
    {
      stu_name : "Ear Piseth",
      stu_gender : "Male",
      stu_subject: "Android"
    },
  ];
 


  constructor() { 
    this.studentob$= of(this.student_ls)
    
  }
 

  getStu(): Observable<any>{
    return this.studentob$;
  }
 
}
