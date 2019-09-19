import { Pokemon } from './pokemon';
import { BaseState } from './base-state';

describe('Test of Pokemon', () => {

  it('should create an instance', () => {
    expect(new Pokemon(1, '', [], '', new BaseState('', '', ''))).toBeTruthy();
  });

  it('should able to pad zero for id', () => {
    // given
    const poke = new Pokemon(1, '', [], '', new BaseState('', '', ''));
    // when
    const resultOfId = poke.padZero(3);
    // then
    expect(resultOfId).toBe('001');
  });
});
