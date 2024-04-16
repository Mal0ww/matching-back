import { config, DotenvSafeOptions } from "dotenv-safe"
import { Injectable } from '@nestjs/common';
import { sign, verify } from "jsonwebtoken"

interface TokenPayload {
    usuario: string;
}


interface CustomDotenvOptions extends DotenvSafeOptions {
    silent?: boolean;
}

config({ silent: true } as CustomDotenvOptions);

@Injectable()
export class TokenService {

    async gerarToken(
        usuario: any
    ): Promise<string> {
        return sign({usuario}, process.env.SECRET,{ expiresIn: 86400});
    }

    async verificarToken(
        token: string
    ): Promise<any> {
        return verify(token, process.env.SECRET, (err, decoded: TokenPayload) => {
            if (err) {
                return false;
            } else {
                return { 
                    valido: true, 
                    usuario: decoded.usuario, 
                };
            }
        });
    }

}
