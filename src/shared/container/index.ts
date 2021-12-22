import { container } from "tsyringe";
import { EmployeeRepository } from "../../modules/employee/infra/typeorm/repositories/EmployeeRepository";
import IEmployeeRepository from "../../modules/employee/repositories/IEmployeeRepository";

container.registerSingleton<IEmployeeRepository>(
  'EmployeeRepository',
  EmployeeRepository
);