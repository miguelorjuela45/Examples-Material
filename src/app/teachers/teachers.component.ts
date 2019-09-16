import { Component, OnInit } from '@angular/core';
import { Teacher } from '../dto/teacher';
import { TeachersService } from '../service/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  displayedColumns: string[] = ['name','class'];
  teacher: Teacher[];

  constructor(private teaservice: TeachersService) {
    this.teacher = this.teaservice.getTeacher();
  }

  ngOnInit() {
  }

}
