import {  Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './features/user/user.module';
import { MongoDatabaseProviderModule } from './providers/database/mongo/provider.module';
import { MongoConfigModule } from './mongo/config.module';
import { EmployeeProfileModule } from './features/employeeProfile/employeeProfile.module';
import { EmployerProfileModule } from './features/employerProfile/employer.module';


@Module({
  imports: [
    AuthModule,
    UserModule,
    EmployeeProfileModule,
    EmployerProfileModule,
    ConfigModule.forRoot(),
    // MongoConfigModule,
    // MongoDatabaseProviderModule,
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
