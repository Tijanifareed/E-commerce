import { EntityRepository , Repository} from "typeorm";
import {Item} from '../entites/items.entity'

@EntityRepository(Item)

export class ItemRepository extends Repository<Item> {
     
}