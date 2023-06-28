import { BadGatewayException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, Usuario } from '@prisma/client';
import HashService from 'src/services/hash.service';
import { PrismaService } from 'src/services/prisma.service';
import CadastraUsuarioDto from './dto/cadastraUsuario.dto';

@Injectable()
export class UsuarioService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly hashService: HashService
        ) {}

    async cadastra(data): Promise<Usuario> {
        try {
            const buscaUsuario = await this.prisma.usuario.findUnique({
                where: {
                    EMAIL: data.EMAIL,
                }
            });

            if(buscaUsuario) {
                throw new HttpException('Este usuário já está cadastrado!', HttpStatus.CONFLICT);
            }

            data.SENHA = this.hashService.gerarHash(data.SENHA);

            const cadastraUsuario = await this.prisma.usuario.create({
                data,
            });

            if(!cadastraUsuario) {
                throw new HttpException(`Erro ao cadastrar novo usuário`, HttpStatus.EXPECTATION_FAILED);
            }

            return cadastraUsuario;

        } catch (error) {
            throw new HttpException(`${error?.message}`, HttpStatus.BAD_GATEWAY);
        }
    }
}
