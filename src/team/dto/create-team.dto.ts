import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({
    example: 'FC Barcelona',
    description: 'The name of the football team',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'https://example.com/images/fc-barcelona.png',
    description: 'The URL of the team image',
  })
  @IsString()
  image: string;
}
