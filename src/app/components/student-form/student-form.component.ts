import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { StudentServiceService } from 'src/app/shared/services/student-service.service';
import { Student } from './../../shared/model/student';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  showMe: boolean = false;
  textShowMe: String = "Add New";
  inputSutdent : Student[] =[];
  getNewStudent!: Student;
  
 


  // formStudent
  formStudent = this.formBuilder.group({
    stu_name:['',Validators.required],
    stu_gender:['',Validators.required],
    stu_subject:['',Validators.required],
})

  constructor(private formBuilder: FormBuilder,private _studentService: StudentServiceService) { }

  ngOnInit(): void {
    
  }
   


  onSubmit(formStudent:any){
    this.getNewStudent = <Student>this.formStudent.value;
    this._studentService.getStu().subscribe((data: Student[]) =>{
        data.push(this.getNewStudent);
    })
   
    // console.log("form", this.inputSutdent.push(formStudent.value))
    
  }

  togleTag(){
    this.showMe = !this.showMe;
    if(this.showMe == true){
      this.textShowMe="Hide";
    }
    else{
      this.textShowMe="Add New";
    }
  }

  get registerFormControl(){
    return this.formStudent.controls;
  }


}
