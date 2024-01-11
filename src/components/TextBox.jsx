import { useState } from "react";
import { Box, Button } from "@mui/material";


function TextBox() {
        const [bgColor, setBgColor] = useState('indigo');
        
        return <div>
            <Box
                role = 'caja' 
                title='es una caja'
                style={{ backgroundColor: bgColor}}
            >
               Hola mundo, cómo vamos.
            </Box>
            <Button 
                variant = 'outlined' 
                onClick={() => setBgColor(bgColor === 'indigo' ? 'tomato': 'indigo')}
            > 
                Pulsa para modificar el color
            </Button>
        </div>
    }
export default TextBox;