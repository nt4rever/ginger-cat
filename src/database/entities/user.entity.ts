import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryColumn({ name: 'id', type: 'uuid', generated: 'uuid' })
  id?: string;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  username: string;
}
