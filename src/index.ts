import Handler from "./handler";
import { EmployeeRepository } from "./modules/employee/infra/typeorm/repositories/EmployeeRepository";

const employeeRepository = new EmployeeRepository();
export const handler = new Handler(employeeRepository);