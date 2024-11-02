import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { Category } from "./entity/category.entity";
import { FindManyCategoryArgs, FindUniqueCategoryArgs } from "./dtos/find.args";
import { CreateCategoryInput } from "./dtos/create-category.input";
import { UpdateCategoryInput } from "./dtos/update-category.input";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "src/common/auth/guards";
import { CategoriesService } from "./categories.service";

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private categoriesService: CategoriesService) {}

  @Mutation(() => Category)
  createCategory(@Args("createCategoryInput") args: CreateCategoryInput) {
    return this.categoriesService.create(args);
  }

  @Query(() => [Category], { name: "categories" })
  findAll(@Args() args: FindManyCategoryArgs) {
    return this.categoriesService.findAll(args);
  }

  @Query(() => Category, { name: "category" })
  findOne(@Args() args: FindUniqueCategoryArgs) {
    return this.categoriesService.findOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Category)
  async updateCategory(@Args("updateCategoryInput") args: UpdateCategoryInput) {
    return this.categoriesService.update(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Category)
  async removeCategory(@Args() args: FindUniqueCategoryArgs) {
    return this.categoriesService.remove(args);
  }
}
