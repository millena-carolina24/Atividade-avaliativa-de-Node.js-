app.post("/alunos/novo", (req, res) => {

    console.log(req.body);
  
    const alunos = req.body;
  
    if (alunos.length > 0) {
        //Se não for vazio
      alunos.forEach((aluno) => {
        const { nome, matricula, nota } = aluno;

        //Pra cada objeto vai extrair nome, matricula.
  
        if (nome && nota && matricula) {
          // Aqui você pode salvar os dados do aluno em um banco de dados ou realizar outras operações
        } else {
          res.json("Forneça todos os dados do aluno");
        }
      });
  
      res.json("Dados fornecidos com sucesso");
      
    } else {
      res.json("Forneça pelo menos um aluno");
    }
  });
  