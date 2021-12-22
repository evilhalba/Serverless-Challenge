import FakeEmployeeRepository from "../repositories/fakes/FakeEmployeeRepository";
import CreateEmployeeService from "./CreateEmployeeService";

let fakeEmployeeRepository: FakeEmployeeRepository
let createEmployeeService : CreateEmployeeService;

describe('CreateEmployee', () => {
  beforeEach(()=>{
    fakeEmployeeRepository = new FakeEmployeeRepository();

    createEmployeeService = new CreateEmployeeService(fakeEmployeeRepository);

  });
  it('should be able to create an new Employee', async() => {
    const employee = await createEmployeeService.execute({
      name: "Fulano",
      age: 21,
      jobRole: "TI"
    });
  
    expect(employee).toHaveProperty('id');
  });
});

