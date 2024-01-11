//Aquí hago un formulario con un campo de texto y un botón.
import React from "react";
import Button from '@mui/material/Button'
import Avatar from "@mui/material/Avatar"
import Box from '@mui/material/Box';
import { TextField, Typography } from '@mui/material'
import { useState } from "react";



function FormUsuario () {

const [nombre, setNombre] = useState('')


const handleSubmit = (e) => {
  //Para que no mande el formulario, sino que haga lo que yo le diga
  e.preventDefault();
  //muestro una imagen
  
  setNombre('')
    
}
return <>
    <Box
        sx={{
            width: 500,
            maxWidth: '100%',
            margin: '50px auto'
        }}
        >
         <h2>Rellena el formulario</h2>
        <form onSubmit={handleSubmit}>
            <TextField 
                fullWidth 
                variant="standard" 
                label="Nombre" 
                id="nombre" 
                value={nombre}
                onChange={(event) => {setNombre(event.target.value)}}
                margin="normal" 
                role="input" />
            <Button type="submit" variant="outlined">Submit</Button>
            
           
        </form>
    
    </Box>
</>
}

export default FormUsuario

// {texto !== '' && <h6>{texto}</h6>  }

  
