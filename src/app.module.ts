import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entites/items.entity';
import {ItemRepository} from './repositories/items.repository';
import {Order} from './entites/order.entity'
import { ItemService } from './services/item.service'; 
import { OrderService } from './services/order.service';
import { OrderRepository } from './repositories/order.repository';
import { OrderController } from './controllers/order.controller';
@Module({

  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Freddie2810.',
      database: 'store',
      entities: [Item, Order],
      synchronize: true,
      // logging: true,
      }
    ),
    TypeOrmModule.forFeature([Item, Order, ItemRepository, OrderRepository]),
  ],
  controllers: [OrderController],
  providers: [ItemService, OrderService], // Register your services
  
})
export class AppModule {}
