import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { UsuarioService } from './usuario.service';
import CadastraUsuarioDto from './dto/cadastraUsuario.dto';
import BuscarUsuarioDto from './dto/buscarUsuario.dto';
import AtualizaUsuarioDto from './dto/atualizaUsuario.dto';
import DeletarUsuarioDto from './dto/deletarUsuario.dto';

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

  @Get("/")
  buscar(@Param() data: BuscarUsuarioDto): Promise<Usuario> {
    return this.usuarioService.buscar(data);
  }

  @Put()
  atualizar(@Body() data: AtualizaUsuarioDto): Promise<Usuario> {
    return this.usuarioService.atualizar(data);
  }

  @Delete()
  deletar(@Param() data: DeletarUsuarioDto): Promise<Usuario> {
    return this.usuarioService.deletar(data);
  }

}
