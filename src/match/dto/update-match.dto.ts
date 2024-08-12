import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchDto } from './create-match.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {
  @ApiPropertyOptional({
    example: '2024-08-16T19:00:00Z',
    description: 'The updated date and time of the match in ISO 8601 format',
  })
  matchDate?: string;
}
