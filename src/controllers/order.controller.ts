import { Body, Controller, Post } from "@nestjs/common";
import { OrderService } from "src/services/order.service";


@Controller()
export class OrderController {
     constructor(
          private readonly orderService: OrderService
     ){}

     @Post('bookOrder')
     async orderItem(@Body() orderData: {customerId: number, items:{ itemId: number; quantity: number }[]}){
          console.log("order Booked");
          return this.orderService.createOrder(orderData.customerId, orderData.items);
     }


}