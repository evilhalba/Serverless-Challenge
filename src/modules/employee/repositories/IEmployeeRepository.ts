import ISaveEmployeeDTO from "../dtos/ISaveEmployeeDTO";
import Employee  from "../infra/typeorm/entities/Employee";

export default interface IEmployeeRepository{
  save(data: ISaveEmployeeDTO): Promise<Employee>;
  update(employee: Employee): Promise<Employee>;
  findById(id: string): Promise<Employee | undefined>;
  findAll():Promise<Employee[]>;
  delete(employee: Employee): Promise<void>;
}