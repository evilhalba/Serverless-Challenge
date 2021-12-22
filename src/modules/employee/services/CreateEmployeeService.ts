import { inject, injectable } from "tsyringe";
import Employee from "../infra/typeorm/entities/Employee";
import IEmployeeRepository from "../repositories/IEmployeeRepository";

interface IRequest{
  name: string;
  age: number;
  jobRole: string;
}

@injectable()
class CreateEmployeeService{
  constructor(
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository
  ){
    //
  }

  public async execute({name, age, jobRole}: IRequest): Promise<Employee>{
    const employee = await this.employeeRepository.save({name, age, jobRole});
    return employee;
  }
}
export default CreateEmployeeService;