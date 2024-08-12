import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('matches')
@Controller('matches')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @ApiOperation({ summary: 'Create a new match' })
  @ApiResponse({
    status: 201,
    description: 'The match has been successfully created.',
    type: CreateMatchDto,
  })
  @Post()
  create(@Body() createMatchDto: CreateMatchDto) {
    return this.matchService.create(createMatchDto);
  }

  @ApiOperation({ summary: 'Get all matches' })
  @Get()
  findAll() {
    return this.matchService.findAll();
  }

  @ApiOperation({ summary: 'Get a match by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a match by ID' })
  @ApiResponse({
    status: 200,
    description: 'The match has been successfully updated.',
    type: UpdateMatchDto,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMatchDto: UpdateMatchDto) {
    return this.matchService.update(+id, updateMatchDto);
  }

  @ApiOperation({ summary: 'Delete a match by ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchService.remove(+id);
  }
}
