import { ConfigService } from "@nestjs/config";
import { BadRequestException, HttpException, Injectable } from "@nestjs/common";
import { CreatePaymentInput } from "./dto/create-payment.input";
import { UpdatePaymentInput } from "./dto/update-payment.input";
import { PrismaService } from "src/common/prisma/prisma.service";
import Stripe from "stripe";

@Injectable()
export class PaymentService {
  private stripe: Stripe;
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService
  ) {
    this.stripe = new Stripe(this.configService.get("STRIPE_PRIVATE_KEY"), {
      apiVersion: "2024-04-10",
    });
  }

  async createPaymentSession(items: { productId: number; quantity: number }[]) {
    try {
      const allItems = await Promise.all(
        items.map(async (item) => {
          const product = await this.prisma.product.findUnique({
            where: { id: item.productId },
          });
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: product.title,
              },
              unit_amount: product.price * 100,
            },
            quantity: item.quantity,
          };
        })
      );
      const session = await this.stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: allItems,
        success_url: "http://localhost:4200/success",
        cancel_url: "http://localhost:4200/cancle",
      });
      return {
        url: session.url,
      };
    } catch (error) {
      throw new BadRequestException({ message: "No Internet Connection!" });
    }
  }
}
