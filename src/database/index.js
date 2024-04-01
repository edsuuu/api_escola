// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line linebreak-style
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
