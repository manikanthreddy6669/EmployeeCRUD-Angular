import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  updateemployee: Employees;
  constructor(private httpService: HttpClient) { }
  public getEmployees() {
    console.log("ins service get employees");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Employees>("http://localhost:2727/employees/GetAllEmployees");
  }

  public addEmp(addemp: Employees) {
    console.log("ins service add");
    console.log(addemp);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:2727/employees/EmployeeCreation", addemp,  { headers, responseType: 'text'});
  }
  
  public update(updateemployee: Employees) {
    this.updateemployee = updateemployee;
  }
  public updateMethod() {
    return this.updateemployee;
  }
  public onUpdate(updatemp: Employees) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:2727/employees/UpdateEmployee", updatemp,  { headers, responseType: 'text'});
  }
  delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:2727/employees/DeleteEmployee/" + id,  { headers, responseType: 'text'});
  }

}
export class Employees {
  id: number;
  name: string;
  salary: number;
  phonenumber: number;
  company: string;
}