// student.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../Interfaces/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private enpoint:string = environment.endPoint;
  private apiUrl:string = this.enpoint + 'student/';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}lista`); 
  }


  addStudents(modelo:Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiUrl}guardar/`, modelo); 
  }

  updateStudents(idEstudent:number, modelo:Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}actualizar/${idEstudent}`, modelo); 
  }

  deleteStudents(idEstudent:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}eliminar/${idEstudent}`); 
  }

}
