import { IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMatchDto {
  @ApiProperty({
    example: 'FC Barcelona',
    description: 'The name of the home team',
  })
  @IsString()
  homeTeam: string;

  @ApiProperty({
    example: 'Real Madrid',
    description: 'The name of the away team',
  })
  @IsString()
  awayTeam: string;

  @ApiProperty({
    example: '2024-08-15T19:00:00Z',
    description: 'The date and time of the match in ISO 8601 format',
  })
  @IsDateString()
  matchDate: string;
}
