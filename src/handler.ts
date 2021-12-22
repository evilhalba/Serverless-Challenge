import 'reflect-metadata';
import './shared/infra/typeorm';
import './shared/container';
import { inject, injectable } from 'tsyringe'
import IEmployeeRepository from './modules/employee/repositories/IEmployeeRepository'
import { Callback, Context } from 'aws-lambda';



@injectable()
class Handler{
  constructor(
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository,
  ){
    //
  }
  
  public async getEmployees(event:any, context: Context, callback:Callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    

    const result = await this.employeeRepository.findAll();
    return{
      statusCode:200,
      body:JSON.stringify(result)
    }
  }

  
}


export default Handler;