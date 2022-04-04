import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);
  console.log({categoryAlreadyExists})
  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "Category Already exists!" });
  }
  
  categoriesRepository.create({ name, description });
  return response.status(201).json();
});

categoriesRoutes.get("/categories", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
