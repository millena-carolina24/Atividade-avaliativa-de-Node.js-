const express = require("express")
const app = express()
const fs = require("fs")
const morgan = require('morgan');

const alunos = require("./alunos")
const arrayDeAlunos = alunos.alunos



app.use(express.json()) //Lê o body no formato json
app.use(morgan('dev'));

function escreverDadosNoArquivo() {
    fs.writeFile('db.json', JSON.stringify(arrayDeAlunos), () => {
        console.log('Dados escritos com sucesso no arquivo db.json');
      });
  }


// Exercício I
app.get("/alunos", (req, res) => {

    // res.json(arrayDeAlunos)
    const nome = req.query.nome
    // const nomeEncontrado =arrayDeAlunos.find((el) => el.nome === nome)
    const media = parseFloat(req.query.media)
    // const mediaEncontrada =arrayDeAlunos.find((el) => el.media === media)

    res.json(arrayDeAlunos)


    if (nome) {

        const filtrarNome = alunos.filtrarPorNome(nome)
        res.json(filtrarNome)

    } else if (media) {

        const filtrarMedia = alunos.filtrarPorMedia(media)
        res.json(filtrarMedia)
    }




})

//Exercício II

app.post("/alunos/novo", (req, res) => {

    console.log(req.body)

    const { nome, matricula, nota } = req.body

    if ((nome && nota && matricula)) {

     

        res.json("Dados fornecidos com sucesso")

    } else {

        res.json("Forneça todos os dados")
    }
})

//Exercício III

app.post("/alunos/atual/:index", (req, res) => {

    const index = Number(req.params.index)


    if (index >= 0 && index < arrayDeAlunos.length) {

        arrayDeAlunos.splice(index, 1)
        escreverDadosNoArquivo()

        res.json("Aluno removido com sucesso")
    }

    else {

        res.status(400).json({ messages: "Não existe esse aluno para remover" })

    }


})

// EXERCÍCIO IV

app.post("/alunos/atualizar/:index", (req, res) => {

    const index = Number(req.params.index)
    const { nome, matricula } = req.body



    if (index >= 0 && index < arrayDeAlunos.length) {

        const novoAluno = { nome: nome, matricula: matricula }
        arrayDeAlunos.splice(index, 1,  novoAluno)
        escreverDadosNoArquivo()

        res.json("Dados do aluno alterado")
    }

    else {

        res.status(400).json({ messages: "Não existe esse aluno para alterar" })

    }


})



app.listen(9000, () => {

    console.log("Servidor rodando com sucesso")
})