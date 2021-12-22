import { getRepository, Repository } from "typeorm";
import ISaveEmployeeDTO from "../../../dtos/ISaveEmployeeDTO";
import IEmployeeRepository from "../../../repositories/IEmployeeRepository";
import Employee from "../entities/Employee";

class EmployeeRepository implements IEmployeeRepository{
  private ormRepository: Repository<Employee>;

  constructor(){
    this.ormRepository = getRepository(Employee);
  }

  async save({name, age, jobRole}: ISaveEmployeeDTO): Promise<Employee> {
      const employee = this.ormRepository.create({
        name, age, jobRole
      });
      await this.ormRepository.save(employee);

      return employee;
  }
  async update(employee: Employee): Promise<Employee> {
      return this.ormRepository.save(employee);
  }
  async findById(id: string): Promise<Employee | undefined> {
      const employee = await this.ormRepository.findOne(id);

      return employee;
  }
  async findAll(): Promise<Employee[]> {
      const employees = this.ormRepository.find();
      return employees;
  }
  async delete(employee: Employee): Promise<void> {
      await this.ormRepository.delete(employee);
  }
}

export {EmployeeRepository}