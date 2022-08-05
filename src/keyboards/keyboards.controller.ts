import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { KeyboardsService } from './keyboards.service';
import { CreateKeyboardDto } from './dto/create-keyboard.dto';
import { UpdateKeyboardDto } from './dto/update-keyboard.dto';

@Controller('keyboards')
export class KeyboardsController {
  constructor(private readonly keyboardsService: KeyboardsService) {}

  @Post()
  create(@Body() createKeyboardDto: CreateKeyboardDto) {
    return this.keyboardsService.create(createKeyboardDto);
  }

  @Get()
  findAll() {
    return this.keyboardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.keyboardsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param("id") id: string,
    @Body() updateKeyboardDto: UpdateKeyboardDto,
  ) {
    return this.keyboardsService.update(+id, updateKeyboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.keyboardsService.remove(+id);
  }
}
