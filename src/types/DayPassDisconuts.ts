export interface DayPassDiscounts {
  [key: string]: Discount;
}

export interface Discount {
  value: number;
  message: string;
}
