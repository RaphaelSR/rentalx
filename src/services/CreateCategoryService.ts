import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface ICreateCategoryServiceRequest {
  name: string;
  description: string;
}
class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ name, description }: ICreateCategoryServiceRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
