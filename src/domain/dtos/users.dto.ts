import { IsString, IsNotEmpty, IsOptional, IsDateString, IsEnum, IsNumber  } from 'class-validator';

enum Gender {
  Male = 'male',
  Female = 'female'
}

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  public lastName: string;

  @IsNumber()
  @IsNotEmpty()
  public age: number;

  @IsEnum(Gender)
  @IsNotEmpty()
  public gender: string;

  @IsString()
  @IsNotEmpty()
  public phone: string;

  @IsDateString()
  @IsNotEmpty()
  public birthDate: Date;

  @IsString()
  @IsOptional()
  public maternity?: string;



}
