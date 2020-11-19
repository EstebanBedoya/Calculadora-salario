import { salario } from './App'

test('No se permiten valores flotantes en las horas', () =>{
    expect(salario(5.5,30000)).toMatch('valores invalidos')
})

test('Si son 48 horas o menos de trabajo, no se pagan horas extras', () =>{
    expect(salario(40,30000).extra).toBe(0)
})

test('No se permiten más de 61 horas de trabajo', () =>{
    expect(salario(61,30000)).toMatch('valores invalidos')
})

test('No se permiten valores negativos en horas', () =>{
    expect(salario(-20,30000)).toMatch('valores invalidos')
})

test('No se permiten valores negativos en salario', () =>{
    expect(salario(20,-30000)).toMatch('valores invalidos')
})

test('Solo valores numéricos en horas',()=>{
    expect(salario('ba',3000)).toMatch('valores invalidos')
})

test('Solo valores numéricos en salario ',()=>{
    expect(salario(40,'ba')).toMatch('valores invalidos')
})

test('Cálculo del valor a pagar por las horas Extra',()=>{
    expect(salario(49,3000).extra).toBe(3600)
})

test('Cálculo del valor del salario total neto',()=>{
    expect(salario(49,3000).neto).toBe(147600)
})

test('Cálculo del valor del salario sin horas extra (bruto)',()=>{
    expect(salario(49,3000).bruto).toBe(144000)
})