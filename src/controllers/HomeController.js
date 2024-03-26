import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'edsu',
      sobrenome: 'da Silva',
      email: 'edsu@aluno.com',
      idade: 21,
      peso: 90,
      altura: 1.80,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
