import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserStatusDto } from './dto/update-user-status.dto';
import { UserRole } from './user-role.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    return this.usersService.createUser(dto);
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id') userId: string,
    @Body() dto: UpdateUserStatusDto,
  ): Promise<void> {
    return this.usersService.updateUserStatus(userId, dto);
  }

  @Patch(':id/role')
  async assignRole(
    @Param('id') userId: string,
    @Body('role') role: UserRole,
  ): Promise<void> {
    return this.usersService.assignRole(userId, role);
  }
}
