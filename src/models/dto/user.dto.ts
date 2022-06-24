import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(8)
  passwordHash: string;

  @IsNotEmpty()
  @IsEmail()
  emailAddress: string;
}
