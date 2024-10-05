import { EntityRepository , Repository} from "typeorm";
import {Item} from '../entites/items.entity'

@EntityRepository(Item)

export class ItemRepository extends Repository<Item> {
     async findOneById(id: number): Promise<Item | null> {
          return this.findOne({ where: { id } });
     }
}