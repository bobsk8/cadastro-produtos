import { IsString, IsNumber } from 'class-validator';

export class ProductDTO {

  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsNumber()
  readonly price: number;
}