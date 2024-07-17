import { WordTruncatePipe } from './word-truncate.pipe';

describe('WordTruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new WordTruncatePipe();
    expect(pipe).toBeTruthy();
  });
});
