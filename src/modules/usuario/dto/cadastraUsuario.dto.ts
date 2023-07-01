import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export default class CadastraUsuarioDto {
  @IsNotEmpty()
  @IsEmail()
  EMAIL: string;
  @IsNotEmpty()
  @IsString()
  SENHA: string;
}
