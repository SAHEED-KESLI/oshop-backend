import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { PaymentService } from "./payment.service";
import { Payment } from "./entities/payment.entity";
import { CreatePaymentInput } from "./dto/create-payment.input";
import { SessionResponse } from "./entities/create-session-response.dto";

@Resolver(() => Payment)
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Mutation(() => SessionResponse)
  async createPaymentSession(
    @Args({ name: "items", type: () => [CreatePaymentInput] })
    createPaymentInput: CreatePaymentInput[]
  ) {
    return await this.paymentService.createPaymentSession(createPaymentInput);
  }
}
