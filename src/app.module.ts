import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './Modules/Login';
import { TokenService } from './Services/TokenService';
import { PrismaCrudModule } from "nestjs-prisma-crud";
import { PrismaService } from "./Services/PrismaService";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        PrismaCrudModule.register({ prismaService: PrismaService }),

        LoginModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
