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
    const { idCNPJ } = req.body;
    const { razaoSocial } = req.body;
    const { porte } = req.body;
    const { cidade } = req.body;
    const { estado } = req.body;
    const { pais } = req.body;

    let mysql = "INSERT INTO Empresas (idCNPJ,razaoSocial,porte,cidade,estado,pais) VALUES (?,?,?,?,?,?)";
    
    db.query(mysql, [idCNPJ,razaoSocial,porte,cidade,estado,pais],(err,result)=>{
        console.log(err)
        res.send(result);
    })
})

app.get ('/getPropostal', (req,res) =>{
    let SQL = "SELECT * from empresas";
    db.query(SQL, (err,result)=>{

        if(err) console.log(err)
        else res.send(result)
    })
})

    
 


app.listen(3001, () => {
    console.log("rodando")
});