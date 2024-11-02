import { UpdateUserInput } from "./dtos/update-user.input";
import { FindManyUserArgs, FindUniqueUserArgs } from "./dtos/find.args";
import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/common/prisma/prisma.service";
import { User } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (user) {
      return user;
    } else {
      throw new BadRequestException({ message: "Credentials incorrect!" });
    }
  }

  // async getUsers() {
  //   return await this.prisma.user.findMany({});
  // }

  findAll(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args);
  }

  findOne(args: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(args);
  }

  update(updateUserInput: UpdateUserInput, userId: number) {
    const { ...data } = updateUserInput;
    return this.prisma.user.update({
      where: { id: userId },
      data: data,
    });
  }

  remove(args: FindUniqueUserArgs) {
    return this.prisma.user.delete(args);
  }
}
