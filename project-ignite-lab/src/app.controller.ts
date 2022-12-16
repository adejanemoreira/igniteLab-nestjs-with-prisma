import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  PrismaService: any;
  constructor(private readonly prisma: PrismaService) {}

  @Get('hello')
  getHello(): string {
    return this.prisma.notification.findMany();
  }
}
