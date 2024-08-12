import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamDto } from './create-team.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTeamDto extends PartialType(CreateTeamDto) {
  @ApiPropertyOptional({
    example: 'Real Madrid',
    description: 'The updated name of the football team',
  })
  name?: string;

  @ApiPropertyOptional({
    example: 'https://example.com/images/real-madrid.png',
    description: 'The updated URL of the team image',
  })
  image?: string;
}
