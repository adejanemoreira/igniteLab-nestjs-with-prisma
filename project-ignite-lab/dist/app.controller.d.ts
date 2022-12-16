import { PrismaService } from './prisma.service';
export declare class AppController {
    private readonly prisma;
    PrismaService: any;
    constructor(prisma: PrismaService);
    getHello(): string;
}
