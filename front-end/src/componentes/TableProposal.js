import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './pages/style.css'


function TableProposal(props) {

  

  return (
    <Card sx={{ minWidth: 275,maxHeight:200 }}>
      <CardContent>

        <div className='CardContent'>
          <Typography variant="body2">
            <p>CNPJ:</p>
            <th>{props.empresa_id}</th>
          </Typography>
        </div>

        <div className='CardContent'>
          <Typography variant="body2">
            <p>Nº SGSET:</p>
            <th>{props.numeroSGSET}</th>
          </Typography>
        </div>

        <div className='CardContent'>
        <Typography variant="body2">
          <p>Assunto:</p>
          <th>{props.assunto}</th>
        </Typography>
        </div>

        <div className='CardContent'>
        <Typography variant="body2">
          <p>Fomento:</p>
          <th>{props.fomento}</th>
        </Typography>
        </div>

        <div className='CardContent'>
        <Typography variant="body2">
          <p>Preço:</p>
          <th>{props.preco}</th>
        </Typography>
        </div>

        <div className='CardContent'>
        <Typography variant="body2">
          <p>Status:</p>
          <th>{props.status}</th>
        </Typography>
        </div>

        
      </CardContent>
      <div className='TablePropostalCardActions'>
        <CardActions>
          <Button size="small">Editar</Button>
        </CardActions>
      </div>
    </Card>
  );
}


export default TableProposal;