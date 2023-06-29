import { Body, Controller, Get, Post } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { UsuarioService } from './usuario.service';
import CadastraUsuarioDto from './dto/cadastraUsuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  cadastrar(@Body() data: CadastraUsuarioDto): Promise<Usuario> {
    return this.usuarioService.cadastrar(data);
  }

  @Get()
  listar(): Promise<Usuario[]> {
    return this.usuarioService.listar();
  }
}
