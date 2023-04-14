const alunos = [
    { nome: 'Ana', media: 8.5 },
    { nome: 'Pedro', media: 6.3 },
    { nome: 'Maria', media: 9.8 },
    { nome: 'João', media: 7.2 },
    { nome: 'Lucas', media: 5.5 }
  ];

  const filtrarPorNome = nome => alunos.filter(aluno => aluno.nome === nome);

  const filtrarPorMedia = media => alunos.filter(aluno => aluno.media >= media);

  module.exports = {
    alunos,
    filtrarPorNome,
    filtrarPorMedia
  };