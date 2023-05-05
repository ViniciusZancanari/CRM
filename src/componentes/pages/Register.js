import React from "react";
import { useForm } from "react-hook-form";

function Register() {

    const { register, handleSubmit,setValue } = useForm();

    var listProposals = []

    const onSubmit = (e) => {

        var proposal = JSON.stringify(e);
        console.log(proposal)
        listProposals.push(e);
        console.log(listProposals);

    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <h1>Cadastrar Novo Atendimento</h1>
                <label>CNPJ</label>
                <input
                    type="number"
                    {...register('cnpj')}
                    onChange={(e) => setValue('cnpj',e.target.value)}
                />

                <label>Razão Social</label>
                <input
                    type="text"
                    {...register('corporateName')}
                    onChange={(e) => setValue('corporateName',e.target.value)}
                    placeholder='Gerado por API'
                />

                <label>Porte</label>
                <placeholder>API</placeholder>
                <input
                    type="text"
                    {...register('size')}
                    onChange={(e) => setValue('size',e.target.value)}
                    placeholder='Gerado por API'
                />

                <label>Localização</label>
                <placeholder>API</placeholder>
                <input
                    type="text"
                    {...register('location')}
                    onChange={(e) => setValue('location',e.target.value)}
                    placeholder='Gerado por API'
                />

                <h2>Contato da Empresa</h2>
                <label>Nome</label>
                <input
                    type='text'
                    {...register('name')}
                    onChange={(e) => setValue('name', e.target.value)}
                    autoFocus></input>

                <label>Telefone</label>
                <input
                    type='tel'
                    {...register("phone")}
                    onChange={(e) => setValue("phone",e.target.value)}
                ></input>

                <label>E-mail</label>
                <input
                    type='email'
                    {...register("email")}
                    onChange={(e) => setValue("email",e.target.value)}
                ></input>
            </div>

            <div>
                <h3>Dados da Proposta</h3>
                <label>Número da Proposta SGSET</label>
                <input
                    {...register("SGSETNumber")}
                    onChange={(e) => setValue("SGSETNumber",e.target.value)}
                    placeholder='Número da Proposta SGSET'
                />

                <label>Responsável Técnico</label>
                <input
                    {...register("responsible")}
                    onChange={(e) => setValue("responsible",e.target.value)}
                    placeholder='Responsável Técnico'
                />

                <label>Área</label>
                <input
                    type='radio'
                    value='Area1'
                    {...register("area")}
                    onChange={(e) => setValue("area",e.target.value)}
                />Area1

                <input
                    type='radio'
                    value='Area2'
                    {...register("area")}
                    onChange={(e) => setValue("area",e.target.value)}
                />Area2

                <input
                    type='radio'
                    value='Area3'
                    {...register("area")}
                    onChange={(e) => setValue("area",e.target.value)}
                />Area3

                <label>Valor</label>
                <input
                    {...register("price")}
                    onChange={(e) => setValue("price",e.target.value)}
                    placeholder='R$' />

                <label>Status</label>
                <input
                    type='radio'
                    value='A'
                    {...register("status")}
                    onChange={(e) => setValue("status",e.target.value)}
                />A

                <input
                    type='radio'
                    value='B'
                    {...register("status")}
                    onChange={(e) => setValue("status",e.target.value)}
                />B

                <input
                    type='radio'
                    value='C'
                    {...register("status")}
                    onChange={(e) => setValue("status",e.target.value)}
                />C

                <label>Parcela Guarda-Chuva:</label>
                <input
                    type='radio'
                    value='sim'
                    {...register("umbrella")}
                    onChange={(e) => setValue("umbrella",e.target.value)}
                />Sim

                <input
                    type='radio'
                    value='nao'
                    {...register("umbrella")}
                    onChange={(e) => setValue("umbrella",e.target.value)}
                />Não

                <button type="submit">OK</button>

            </div>
        </form>
    )
}

export default Register;