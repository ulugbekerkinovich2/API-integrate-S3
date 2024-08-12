import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Injectable()
export class MatchService {
  private matches = [];

  create(createMatchDto: CreateMatchDto) {
    const match = { id: Date.now(), ...createMatchDto };
    this.matches.push(match);
    return match;
  }

  findAll() {
    return this.matches;
  }

  findOne(id: number) {
    const match = this.matches.find((m) => m.id === id);
    if (!match) {
      throw new NotFoundException('Match not found');
    }
    return match;
  }

  update(id: number, updateMatchDto: UpdateMatchDto) {
    const matchIndex = this.matches.findIndex((m) => m.id === id);
    if (matchIndex === -1) {
      throw new NotFoundException('Match not found');
    }
    const updatedMatch = { ...this.matches[matchIndex], ...updateMatchDto };
    this.matches[matchIndex] = updatedMatch;
    return updatedMatch;
  }

  remove(id: number) {
    const matchIndex = this.matches.findIndex((m) => m.id === id);
    if (matchIndex === -1) {
      throw new NotFoundException('Match not found');
    }
    this.matches.splice(matchIndex, 1);
  }
}
