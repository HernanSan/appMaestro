import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/student.service'; 

@Component({
  selector: 'app-nombre-del-componente',
  templateUrl: './nombre-del-componente.component.html',
  styleUrls: ['./nombre-del-componente.component.scss']
})
export class NombreDelComponente implements OnInit {
  personas: any[] = [];

  constructor(private StudentService: StudentService) { }

  ngOnInit(): void {
    this.StudentService.getPersons().subscribe(data => {
      this.personas = data;
    });
  }
}