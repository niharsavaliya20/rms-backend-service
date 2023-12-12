import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UserService } from './user.servise';
import { UserController } from './user.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'user', schema: UserSchema}])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
