// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', loginRequired, userController.index); // Lista usuarios
// router.get('/:id', loginRequired, userController.show); // lista usuario

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
 index - lista todos os usuarios - get
 store/create - cria um novo usuario - post
 delete - apaga um usuario - delete
 show - mostra um usuario - get
 update - atualiza um usuario - patch para um ojbeto inteiro ou put para um elemento do objeto
*/
