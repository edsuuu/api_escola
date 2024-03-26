/* eslint-disable spaced-comment */
// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ errors: ['Login Required'] });
  }

  const [, token] = authorization.split(' '); //mandar a string vazia ou assim 'Bearer '

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(401).json({ errors: ['Token expirado ou inválido.'] });
  }
};
