import Game from '#models/game';
import factory from '@adonisjs/lucid/factories';

export const GameFactory = factory
  .define(Game, async ({ faker }) => {
    return {
      name: faker.lorem.words(),
    };
  })
  .build();
