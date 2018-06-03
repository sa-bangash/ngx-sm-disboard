import { DisboardModule } from './disboard.module';

describe('DisboardModule', () => {
  let disboardModule: DisboardModule;

  beforeEach(() => {
    disboardModule = new DisboardModule();
  });

  it('should create an instance', () => {
    expect(disboardModule).toBeTruthy();
  });
});
