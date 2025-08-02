import { describe, expect, it } from '@jest/globals';

import { Post } from '../post.entity';
import { PostLog } from '../post-log.entity';
import { Role } from '../role.entity';
import { User } from '../user.entity';

describe('PostLog Entity', () => {
  it('should return post log correctly', () => {
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

    const postLog = new PostLog(
      'POSTLOG001',
      'create',
      defaultDate,
      defaultDate,
      'POST001',
      'USER001',
      post,
      user,
    );

    expect(postLog.id).toBe('POSTLOG001');
    expect(postLog.action).toBe('create');
    expect(postLog.created_at).toEqual(defaultDate);
    expect(postLog.updated_at).toEqual(defaultDate);
    expect(postLog.post_id).toBe(postLog.post.id);
    expect(postLog.user_id).toBe(user.id);
    expect(postLog.post).toEqual(postLog.post);
    expect(postLog.user).toEqual(user);
  });
});
