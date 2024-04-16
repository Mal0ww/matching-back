import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/Services/PrismaService";

@Injectable()

export class UsuarioRepository{

    constructor(private readonly prismaService: PrismaService){}

    async loginUsuario(
        email: string,
        senha: string
    ): Promise<{}> {
        const usuario = await this.prismaService.login.findFirst({
            where: {
                email,
                senha
            }
        })
        return usuario;
    }
}