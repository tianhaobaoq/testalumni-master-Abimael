export function titleCase(text)
{
 if (text === '') return '';

 const arr = text.split(' ');
 const result = [];
 for (let elem of arr){
    result.push(elem[0].toUpperCase() + elem.substring(1).toLowerCase())
 }
 return result.join(' ');
}

export function divide(n1, n2)
{
    
    if (!isNaN(n1) && !isNaN(n2))
    {
        if (n2 === 0) {
            return null
        }
        return (n1/n2)
    }
    else
    {
        return (null)
    
    }
    
 
}


export function sum(n1, n2)
{
    if (!isNaN(n1) && !isNaN(n2)){
    return (n1+n2)
    }
    else
    {
     return (null)
    }
}

export function isapple(fruit){

    if (fruit === 'manzana'){
        return true
    }
    else
    {
        return false
    }
}

function MiComponente() {
    
        return <div>Aquí se llamarían a las funciones</div>
    }
export default MiComponente;