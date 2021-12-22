import AppError from '../../../shared/errors/AppError';
import { inject, injectable } from "tsyringe";
import Employee from "../infra/typeorm/entities/Employee";
import IEmployeeRepository from "../repositories/IEmployeeRepository";

interface IRequest{
  id: string;
  name: string;
  age: number;
  jobRole: string;
}

@injectable()
class UpdateEmployeeService{
  constructor(
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository
  ){
    //
  }

  public async execute({name, age, jobRole, id}: IRequest): Promise<Employee>{
    const findEmployee = await this.employeeRepository.findById(id);
    
    if(!findEmployee){
      throw new AppError("Employee not found");
    }
    Object.assign(findEmployee,{
      name, age, jobRole
    });

    const employee = await this.employeeRepository.update(findEmployee);
    return employee;
  }
}
export default UpdateEmployeeService;