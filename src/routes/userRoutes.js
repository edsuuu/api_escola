// eslint-disable-next-line import/no-extraneous-dependencies
import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/*
 index - lista todos os usuarios - get
 store/create - cria um novo usuario - post
 delete - apaga um usuario - delete
 show - mostra um usuario - get
 update - atualiza um usuario - patch para um ojbeto inteiro ou put para um elemento do objeto
*/