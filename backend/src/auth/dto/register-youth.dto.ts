import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterYouthDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
