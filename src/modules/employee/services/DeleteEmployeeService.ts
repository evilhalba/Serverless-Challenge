import AppError from '../../../shared/errors/AppError';
import { inject, injectable } from "tsyringe";
import IEmployeeRepository from "../repositories/IEmployeeRepository";



@injectable()
class DeleteEmployeeService{
  constructor(
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository
  ){
    //
  }

  public async execute(id: string): Promise<void|AppError>{
    const employee = await this.employeeRepository.findById(id);
    if(!employee){
      throw new AppError('Employee not found');
    }

    await this.employeeRepository.delete(employee);
  }
}
export default DeleteEmployeeService;