import AppError from '../../../shared/errors/AppError';
import FakeEmployeeRepository from "../repositories/fakes/FakeEmployeeRepository";
import CreateEmployeeService from "./CreateEmployeeService";
import DeleteEmployeeService from "./DeleteEmployeeService";
import Employee from '../infra/typeorm/entities/Employee';
import { uuid } from 'uuidv4';

let fakeEmployeeRepository: FakeEmployeeRepository
let deleteEmployeeService : DeleteEmployeeService;
let createEmployeeService : CreateEmployeeService;
describe('DeleteEmployee', () => {
  beforeEach(()=>{
    fakeEmployeeRepository = new FakeEmployeeRepository();

    deleteEmployeeService = new DeleteEmployeeService(fakeEmployeeRepository);
    createEmployeeService = new CreateEmployeeService(fakeEmployeeRepository);

  });
  it('should be able to delete an existent employee', async() => {
    const employee = await createEmployeeService.execute({
      name: "Fulano",
      age: 21,
      jobRole: "TI"
    });
    const deleteEmployee = await deleteEmployeeService.execute(employee.id)
  
    expect(deleteEmployee).toBe(undefined);
  });
  it('should not be able to delete an unexistent employee', async() => {
    const employee = new Employee();
    Object.assign(employee, {
      id:uuid(),
      name: "teste não gerado",
      age:20,
      jobRole:"teste"
    });
    
    await expect( deleteEmployeeService.execute(employee.id)).rejects.toBeInstanceOf(AppError);
  });
});

