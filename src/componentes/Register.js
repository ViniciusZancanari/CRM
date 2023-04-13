import React from "react";
import { useForm } from "react-hook-form";

function Register ()
{

const [name, setName] = React.useState('');
const [phone, setPhone] = React.useState('');
const [email, setEmail] = React.useState('');
const [projectNumber, setProjectNumber] = React.useState('');
const [responsible, setResponsible] = React.useState('');
const [area, setArea] = React.useState('');
const [price,setPrice] = React.useState('');
const [status, setStatus] = React.useState('');
const [umbrella, setUmbrella] = React.useState('');

const {register, handleSubmit} = useForm();

var listaJson= []

const onSubmit = (e) =>{

    var jsonn = JSON.stringify(e);
    console.log(jsonn)
    listaJson.push(e);
    console.log(listaJson);

}
 
return(
    
<form onSubmit={handleSubmit(onSubmit)}>
        
    <div> 
    <h1>Contato da Proposta</h1> 
    <label>Nome</label>
    <input 
    type='text' 
    {...register('name')}
    onChange={(e) => setName(e.target.value)}
    autoFocus></input>

    <label>Telefone</label>
    <input 
    type='tel'
    {...register("phone")}
    onChange={(e) => setPhone(e.target.value)}
    ></input>

    <label>E-mail</label>
    <input 
    type='email'
    {...register("email")}
    onChange={(e) => setEmail(e.target.value)}
    ></input>
    </div>
   
    <div>
    <h2>Dados da Proposta</h2> 
    <label>Número da Proposta SGSET</label>
    <input 
    {...register("projectNumber")}
    onChange={(e) => setProjectNumber(e.target.value)}    
    placeholder='Número da Proposta SGSET'
    />

    <label>Responsável Técnico</label>
    <input 
    {...register("responsible")}
    onChange={(e) => setResponsible(e.target.value)}
    placeholder='Responsável Técnico'></input>

    <label>Área</label>
    <input type='radio' value='Area1' name='area'/>Area1
    <input type='radio' value='Area2' name='area'/>Area2
    <input type='radio' value='Area3' name='area'/>Area3


    <label>Valor</label>
    <input
    {...register("price")}
    onChange={(e) => setPrice(e.target.value)}
    placeholder='R$'/>

    <label>Status</label>
    <input 
    type='radio' 
    value='A' 
    {...register("status")}
    onChange={(e) => setStatus(e.target.value)}
    />A

    <input 
    type='radio'
    value='B'
    {...register("status")}
    onChange={(e) => setStatus(e.target.value)}
    />B

    <input
    type='radio'
    value='C'
    {...register("status")}
    onChange={(e) => setStatus(e.target.value)}
    />C

    <label>Parcela Guarda-Chuva:</label>
    <input
    type='radio'
    value='sim'
    {...register("umbrella")}
    onChange={(e) => setUmbrella(e.target.value)}
    />Sim
    
    <input
    type='radio'
    value='nao'
    {...register("umbrella")}
    onChange={(e) => setUmbrella(e.target.value)}
    />Não
    
    <button type="submit">OK</button>

    </div>
</form>
)



}

export default Register;