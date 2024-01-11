import {titleCase, divide, sum, isapple} from '../components/MiComponente'

describe('funciones dentro del componente MiComponente', () => {
    describe('titleCase', () => {
        test('debe retornar un string', () =>
        {   //Compruebo si la ejecuación de la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = titleCase('Un valor');
            expect(typeof result).toBe('string')
        })

        test('debe retornar el string transformado', () => 
        {
            const result = titleCase('es una string chiquitita');
            expect(result).toBe('Es Una String Chiquitita');

        })


        //Test de String vacio
        test('debe retornar un string vacio', () =>
        {
            const result = titleCase("");
            expect(result).toBe("")
        })


    });

    
    describe('sum', () => {
        test('debe retornar un número si los sumandos son números', () =>
        {   //Compruebo si la ejecuaciónd e la función titleCase pasándole cualquier
            //valor de string me devuelve un string
            const result = sum(2,3);
            expect(typeof result).toBe('number')
        })

        test('debe retornar null si algún sumando no es un número', () =>
        {   
            const result = sum('hola',3);
            expect(result).toBe(null)
        })
        test('debe retornar la suma', () => 
        {
            const result = sum(-2,5);
            expect(result).toBe(3);
        })
       
    });

    describe('divide', () => { 

        test('debe retornar un número', () =>
        {
            const result = divide(1,5)
            expect(typeof result).toBe('number')
        })

        test('String debe retornar null', () =>
        {
            const result = divide('hola',5)
            expect(result).toBe(null)
        })

        test('Comprobar división de 10 entre 2', () =>
        {
            const result = divide(10,2)
            expect(result).toBe(5)
        })

        test('Comprobar división de 10 entre 4', () =>
        {
            const result = divide(10,4)
            expect(result).toBeCloseTo(2.5)
        })

        test('Comprobar cualquier numero entre 0 sea null', () =>
        {
            const result = divide(10,0)
            expect(result).toBe(null)
        })
    });


    describe('isapple', () => { 
    
        test('Funcion devuelve boolean', () =>
        {
            const result = isapple('')
            expect(typeof result).toBe('boolean')
        });

        test('Manzana devuelve true', () =>
        {
            const result = isapple('manzana')
            expect(result).toBeTruthy()
        })

        test('Si no es manzana, devuelve false', () =>
        {
            const result = isapple('fresa')
            expect(result).toBeFalsy()
        })




    });

});