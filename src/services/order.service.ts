import { Injectable } from "@nestjs/common";
// import {ItemService} from '../services/item.service';
import { InjectRepository } from "@nestjs/typeorm";
import {Order} from '../entites/order.entity'
import { OrderRepository } from "src/repositories/order.repository";
import { ItemService } from "./item.service";



@Injectable()
export class OrderService {
     constructor(
          @InjectRepository(Order)
          private readonly orderRepository: OrderRepository,
          private readonly itemService: ItemService, // Injecting the Item service

     ){}

     async createOrder(customerId: number, items:{ itemId: number; quantity: number }[]):Promise<any>{
         for(const item of items){
           const inStock = await this.itemService.checkInventory(item.itemId, item.quantity);
           if(!inStock){
               return {error:`This item ${item.itemId} is not avaliable`}
           }
         }

         const orderId = `ORD${Date.now()}`
         const order = {orderId, customerId,items}

         await this.orderRepository.save(order)
         return order;
     }
}