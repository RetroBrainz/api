/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';

const AuthController = () => import('#controllers/auth');
const GameController = () => import('#controllers/game');

router.get('/', async () => {
  return {
    hello: 'world',
  };
});

router.post('/login', [AuthController, 'login']);
router.post('/logout', [AuthController, 'logout']);
router.post('/register', [AuthController, 'register']);

router.resource('games', GameController);
