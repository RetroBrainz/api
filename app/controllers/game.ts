import Game from '#models/game';
import { createGameValidator, updateGameValidator } from '#validators/game';
import type { HttpContext } from '@adonisjs/core/http';

export default class GamesController {
  async index({ request }: HttpContext) {
    const { page = 1, perPage = 10 } = request.params();
    return Game.query().paginate(page, perPage);
  }

  async store({ request }: HttpContext) {
    const payload = await createGameValidator.validate(request.all());
    return Game.create(payload);
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const game = await Game.find(params.id);
    if (!game) {
      return response.abort({ message: 'Game Not Found' }, 404);
    }
    return game;
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const game = await Game.find(params.id);
    if (!game) {
      return response.abort({ message: 'Game Not Found' }, 404);
    }

    const payload = await updateGameValidator.validate(request.all());
    game.merge(payload);
    await game.save();

    return game;
  }

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    const game = await Game.find(params.id);
    if (!game) {
      return response.abort({ message: 'Game Not Found' }, 404);
    }
    await game.delete();
  }
}
