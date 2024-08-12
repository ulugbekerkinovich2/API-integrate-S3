import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamService {
  private teams = [];

  create(createTeamDto: CreateTeamDto) {
    const team = { id: Date.now(), ...createTeamDto };
    this.teams.push(team);
    return team;
  }

  findAll() {
    return this.teams;
  }

  findOne(id: number) {
    const team = this.teams.find((t) => t.id === id);
    if (!team) {
      throw new NotFoundException('Team not found');
    }
    return team;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    const teamIndex = this.teams.findIndex((t) => t.id === id);
    if (teamIndex === -1) {
      throw new NotFoundException('Team not found');
    }
    const updatedTeam = { ...this.teams[teamIndex], ...updateTeamDto };
    this.teams[teamIndex] = updatedTeam;
    return updatedTeam;
  }

  remove(id: number) {
    const teamIndex = this.teams.findIndex((t) => t.id === id);
    if (teamIndex === -1) {
      throw new NotFoundException('Team not found');
    }
    this.teams.splice(teamIndex, 1);
  }
}
