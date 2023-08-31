const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "bL&&548p",
    database: "crm",
});

app.use(cors())
app.use(express.json())


app.post('/register', (req, res) => {

    const { idCNPJ, razaoSocial, porte, cidade, estado, pais } = req.body;
    const { nome, telefone, email } = req.body;
    const { numeroSGSET, data, assunto, fomento, responsavelComercial, responsavelTecnico, area, preco, status, guardaChuva } = req.body;

    let SQL1 = "INSERT INTO Empresas (idCNPJ,razaoSocial,porte,cidade,estado,pais) VALUES (?,?,?,?,?,?);";

    db.query(SQL1, [idCNPJ, razaoSocial, porte, cidade, estado, pais], (err, empresaResult) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erro ao inserir proposta");
            return;
        }


        //InsertId irá pegar o ID da empresa cadastrada, ou seja, CNPJ
        let SQL2 = "INSERT INTO pessoas (empresa_id, nome,telefone,email) VALUES (?,?,?,?)";
        db.query(SQL2, [idCNPJ, nome, telefone, email], (err, pessoaResult) => {
            if (err) {
                console.log(err);
                res.status(500).send("Erro ao inserir proposta");
                return;
            }
            const pessoa_id = pessoaResult.insertID;

            let SQL3 = "INSERT INTO propostas (empresa_id, pessoa_id,numeroSGSET, data,assunto,fomento,responsavelComercial,responsavelTecnico,area,preco,status,guardaChuva) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";

            db.query(SQL3, [idCNPJ, pessoa_id, numeroSGSET, data, assunto, fomento, responsavelComercial, responsavelTecnico, area, preco, status, guardaChuva], (err, propostaResult) => {
                if (err) {
                    console.log(err);
                    res.status(500).send("Erro ao inserir proposta");
                    return;
                }

                res.status(200).send("Todas as inserções foram feitas com sucesso");

            })
            
        })




    })
})

app.get('/getPropostal', (req, res) => {

    const { empresa_id } = req.query;

    let SQLConsult = " SELECT * from propostas WHERE empresa_id = ?";

    db.query(SQLConsult,[empresa_id], (err, result) => {

        if (err) console.log(err)
        else res.send(result)
    })
})





app.listen(3001, () => {
    console.log("rodando")
});