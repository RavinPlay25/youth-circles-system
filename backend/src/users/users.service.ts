import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserStatusDto } from './dto/update-user-status.dto';
import { UserRole } from './user-role.enum';

@Injectable()
export class UsersService {
  async createUser(dto: CreateUserDto): Promise<void> {
    // implementation will be added later
  }

  async findByEmail(email: string): Promise<void> {
    // implementation will be added later
  }

  async updateUserStatus(userId: string, dto: UpdateUserStatusDto): Promise<void> {
    // implementation will be added later
  }

  async assignRole(userId: string, role: UserRole): Promise<void> {
    // implementation will be added later
  }
}
