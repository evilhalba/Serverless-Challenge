import { uuid } from "uuidv4";
import ISaveEmployeeDTO from "../../dtos/ISaveEmployeeDTO";
import Employee from "../../infra/typeorm/entities/Employee";
import IEmployeeRepository from "../IEmployeeRepository";

export default class FakeEmployeeRepository implements IEmployeeRepository{
  //
  private employees: Employee[] = [];

  async save({name, age, jobRole}: ISaveEmployeeDTO): Promise<Employee>{
    const employee = new Employee();

    Object.assign(employee, {
      id:uuid(),
      name,
      age,
      jobRole
    });
    this.employees.push(employee);

    return employee;
  };
  async update(employee: Employee): Promise<Employee>{
    
    const findIndex = this.employees.findIndex(findEmployee => findEmployee.id === employee.id);

    this.employees[findIndex] = employee;

    return employee;
   
    
  }
  async findAll(): Promise<Employee[]> {
      return this.employees;
  }

  async findById(id: string): Promise<Employee | undefined> {
    const findEmployee = this.employees.find(employee => employee.id === id);

    return findEmployee;
}
  async delete(employee: Employee): Promise<void> {
      const findIndex = this.employees.findIndex(findEmployee => findEmployee.id === employee.id);

      this.employees.splice(findIndex);
  }
}