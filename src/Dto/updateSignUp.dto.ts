import { IsArray, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class updateSignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly loginType: string;


  @IsNotEmpty()
  @IsArray()
  roles: string[]; 
  
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}