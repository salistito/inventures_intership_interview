import { IProduct } from "./product.model";

export interface IPastillero {
  remedios: IRemedio[];
}

export interface IRemedio {
  id: number;
  product: IProduct;
  quantity: number;
  purchase_date: Date;

}
