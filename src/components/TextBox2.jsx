import { useState } from "react";
import { Box, Button } from "@mui/material";


function TextBox2() {
        
        const [txtColor, setTxtColor] = useState('pink');
        return <div>
            <Box
                
                role = 'caja' 
                title='es una caja'
                style={{ color: txtColor}}
            >
               Hola mundo, cómo vamos.
            </Box>
            <Button 
                variant = 'outlined' 
                onClick={() => setTxtColor(txtColor === 'pink' ? 'black': 'pink')}
            > 
                Pulsa para modificar el color del texto
            </Button>

        </div>
    }
export default TextBox2;