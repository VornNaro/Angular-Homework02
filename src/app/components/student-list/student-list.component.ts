import { Student } from './../../shared/model/student';
import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from 'src/app/shared/services/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentListFormInterfaces !: Student[];

  constructor(private _studentService: StudentServiceService) { }

  ngOnInit(): void {
      this._studentService.studentob$.subscribe((students : Student[]) => {
        this.studentListFormInterfaces = students;
      })
      console.log(this.studentListFormInterfaces)
  }
  remove_student(i: number){
    this.studentListFormInterfaces.splice(i, 1);
  }
}
