import { describe, expect, it } from '@jest/globals';

import { Role } from '../role.entity';
import { User } from '../user.entity';

describe('User Entity', () => {
  it('should return user correctly', () => {
    const defaultDate = new Date('2023-01-01T00:00:00Z');

    const role = new Role(
      'ROLE001',
      'Admin',
      'Administrator role',
      defaultDate,
      defaultDate,
    );

    const user = new User(
      'USER001',
      'john.doe',
      'password123',
      true,
      defaultDate,
      defaultDate,
      'ROLE001',
      role,
      [],
      [],
    );

    expect(user.id).toBe('USER001');
    expect(user.username).toBe('john.doe');
    expect(user.password).toBe('password123');
    expect(user.active).toBe(true);
    expect(user.created_at).toEqual(defaultDate);
    expect(user.updated_at).toEqual(defaultDate);
    expect(user.role_id).toBe('ROLE001');
    expect(user.role).toEqual(role);
  });
});
