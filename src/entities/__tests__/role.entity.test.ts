import { describe, expect, it } from '@jest/globals';

import { Role } from '../role.entity';

describe('Role Entity', () => {
  it('should return role correctly', () => {
    const defaultDate = new Date('2023-01-01T00:00:00Z');

    const role = new Role(
      'ROLE001',
      'Admin',
      'Administrator role',
      new Date('2023-01-01T00:00:00Z'),
      new Date('2023-01-01T00:00:00Z'),
    );

    expect(role.id).toBe('ROLE001');
    expect(role.name).toBe('Admin');
    expect(role.description).toBe('Administrator role');
    expect(role.created_at).toEqual(defaultDate);
    expect(role.updated_at).toEqual(defaultDate);
  });
});
