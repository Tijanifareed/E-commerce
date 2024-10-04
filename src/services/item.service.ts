import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/entites/items.entity';
import {ItemRepository} from 'src/repositories/items.repository'

@Injectable()
export class ItemService{
     constructor(
          @InjectRepository(Item)
          private itemsRepository: ItemRepository,
     ){}
}