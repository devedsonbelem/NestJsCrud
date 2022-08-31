
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaymentDto {


@IsString()
@IsOptional()
@ApiProperty({ description: 'stripe source id' })
source?: string;

@IsOptional()
@IsNumber()
amount?: number;

}