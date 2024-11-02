import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ItemsService } from "./items.service";
import { Item } from "./entity/item.entity";
import { CreateItemInput } from "./dtos/create-item.input";
import { UpdateItemInput } from "./dtos/update-item.input";
import { PrismaService } from "src/common/prisma/prisma.service";

@Resolver(() => Item)
export class ItemsResolver {
  constructor(
    private readonly itemsService: ItemsService,
    private readonly prisma: PrismaService
  ) {}

  @Mutation(() => Item)
  createItem(@Args("createItemInput") args: CreateItemInput) {
    return this.itemsService.create(args);
  }

  @Mutation(() => Item)
  async updateItem(@Args("updateItemInput") args: UpdateItemInput) {
    return this.itemsService.update(args);
  }
}
