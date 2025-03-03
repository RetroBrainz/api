import User from '#models/user';
import { loginValidator, registerValidator } from '#validators/auth';
import type { HttpContext } from '@adonisjs/core/http';
import hash from '@adonisjs/core/services/hash';

export default class AuthController {
  async login({ request, response }: HttpContext) {
    const { email, password } = await loginValidator.validate(request.all());

    const user = await User.findBy('email', email);
    if (!user) {
      return response.abort('Invalid credentials');
    }

    const isPasswordValid = await hash.verify(user.password, password);

    if (!isPasswordValid) {
      return response.abort('Invalid credentials');
    }

    const token = await User.accessTokens.create(user);

    return { token, user };
  }

  async logout({ auth }: HttpContext) {
    await User.accessTokens.delete(auth.user!, auth.user!.currentAccessToken.identifier);
    return {
      revoked: true,
    };
  }

  async register({ request }: HttpContext) {
    const payload = await registerValidator.validate(request.all());
    const user = await User.create(payload);
    const token = await User.accessTokens.create(user);
    return { token, user };
  }

  async user({ auth }: HttpContext) {
    return auth.user;
  }
}
