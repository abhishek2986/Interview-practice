import { BookMiddleware } from './book.middleware';

describe('BookMiddleware', () => {
  it('should be defined', () => {
    expect(new BookMiddleware()).toBeDefined();
  });
});
