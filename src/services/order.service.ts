import { Injectable } from "@nestjs/common";
// import {ItemService} from '../services/item.service';
import { InjectRepository } from "@nestjs/typeorm";
import {Order} from '../entites/order.entity'
import { OrderRepository } from "src/repositories/order.repository";



@Injectable()
export class OrderService {
     constructor(
          @InjectRepository(Order)
          private readonly orderRepository: OrderRepository,
     ){}
}