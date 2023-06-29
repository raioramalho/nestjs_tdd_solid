import { IsEmail, IsNotEmpty, IsNumber, IsObject, IsOptional } from "class-validator";

export default class DeletarUsuarioDto {
    @IsOptional()
    @IsNumber()
    CODUSU: number;
    @IsOptional()
    @IsEmail()
    EMAIL: string;
}