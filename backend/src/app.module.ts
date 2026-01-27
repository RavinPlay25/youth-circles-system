import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { SurveysModule } from './surveys/surveys.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProfilesModule,
    SurveysModule,
    AdminModule,
  ],
})
export class AppModule {}
