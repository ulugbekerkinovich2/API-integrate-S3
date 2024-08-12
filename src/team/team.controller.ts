import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('teams')
@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiOperation({ summary: 'Create a new team' })
  @ApiResponse({
    status: 201,
    description: 'The team has been successfully created.',
    type: CreateTeamDto,
  })
  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @ApiOperation({ summary: 'Get all teams' })
  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @ApiOperation({ summary: 'Get a team by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a team by ID' })
  @ApiResponse({
    status: 200,
    description: 'The team has been successfully updated.',
    type: UpdateTeamDto,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @ApiOperation({ summary: 'Delete a team by ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}
