import { Body, Controller, Post } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { UsuarioService } from './usuario.service';
import CadastraUsuarioDto from './dto/cadastraUsuario.dto';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) {}

    @Post()
    cadastra(@Body() data: CadastraUsuarioDto): Promise<Usuario> {
        return this.usuarioService.cadastra(data);
    }
}
