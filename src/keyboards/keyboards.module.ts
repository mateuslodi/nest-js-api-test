import { Module } from '@nestjs/common';
import { KeyboardsService } from './keyboards.service';
import { KeyboardsController } from './keyboards.controller';

@Module({
  controllers: [KeyboardsController],
  providers: [KeyboardsService]
})
export class KeyboardsModule {}
