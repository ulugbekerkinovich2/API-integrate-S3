import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MatchModule } from './match/match.module';
import { TeamModule } from './team/team.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MatchModule,
    TeamModule,
    UploadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
