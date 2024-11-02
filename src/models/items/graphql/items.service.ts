import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/common/prisma/prisma.service";
import { CreateItemInput } from "./dtos/create-item.input";
import { UpdateItemInput } from "./dtos/update-item.input";

@Injectable()
export class ItemsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createItemInput: CreateItemInput) {
    return this.prisma.item.create({
      data: createItemInput,
    });
  }

  update(updateItemInput: UpdateItemInput) {
    const { cartId, ...data } = updateItemInput;
    return this.prisma.item.update({
      where: { cartId, productId: updateItemInput.productId },
      data: data,
    });
  }
}
