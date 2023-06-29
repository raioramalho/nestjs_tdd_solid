import { IsNotEmpty, IsNumber } from "class-validator";
import CadastraUsuarioDto from "./cadastraUsuario.dto";

export default class AtualizaUsuarioDto extends CadastraUsuarioDto {
    @IsNotEmpty()
    @IsNumber()
    CODUSU: number;
}