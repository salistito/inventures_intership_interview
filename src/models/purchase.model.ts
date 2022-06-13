export interface IPurchase {
  purchase_id: number;
  details: IProductDetail[];
  received_date: Date;
}

export interface IProductDetail {
  product_id: number;
  quantity: number;
}