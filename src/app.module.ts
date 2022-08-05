import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeyboardsModule } from './keyboards/keyboards.module';

@Module({
  imports: [KeyboardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
