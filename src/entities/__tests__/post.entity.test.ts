import { describe, expect, it } from '@jest/globals';

import { Role } from '../role.entity';
import { User } from '../user.entity';
import { Post } from '../post.entity';

describe('Post Entity', () => {
  it('should return post correctly', () => {
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

    const post = new Post(
      'POST001',
      'Fake Post Title',
      'This is a fake post content',
      true,
      defaultDate,
      defaultDate,
      'USER001',
      user,
      [],
    );

    expect(post.id).toBe('POST001');
    expect(post.title).toBe('Fake Post Title');
    expect(post.content).toBe('This is a fake post content');
    expect(post.active).toBe(true);
    expect(post.created_at).toEqual(defaultDate);
    expect(post.updated_at).toEqual(defaultDate);
    expect(post.user_id).toBe(user.id);
    expect(post.user).toEqual(user);
  });
});
