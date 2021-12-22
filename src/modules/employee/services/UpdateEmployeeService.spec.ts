import FakeEmployeeRepository from "../repositories/fakes/FakeEmployeeRepository";
import CreateEmployeeService from "./CreateEmployeeService";
import UpdateEmployeeService from './UpdateEmployeeService';

let fakeEmployeeRepository: FakeEmployeeRepository
let updateEmployeeService : UpdateEmployeeService;
let createEmployeeService : CreateEmployeeService;
describe('UpdateEmployeeService', () => {
  beforeEach(()=>{
    fakeEmployeeRepository = new FakeEmployeeRepository();

    updateEmployeeService = new UpdateEmployeeService(fakeEmployeeRepository);
    createEmployeeService = new CreateEmployeeService(fakeEmployeeRepository);

  });
  it('should be able to update an existent employee', async() => {
    const employee = await createEmployeeService.execute({
      name: "Fulano",
      age: 21,
      jobRole: "TI"
    });

    const updateEmployee = await updateEmployeeService.execute({
      id: employee.id,
      name: "Fulano",
      age: 21,
      jobRole: "DEV"
    });
    


    expect(updateEmployee.jobRole).toBe("DEV");
  });
  
});

