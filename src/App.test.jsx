import { salario } from './App'

test('no permitir valores flotantes en las horas', () => {
    expect(salario(5.3, 30000)).toMatch('valores invalidos')
})

test('si son 48 horas o menos de trabajo, no se pagan horas extras', () => {
    expect(salario(40, 30000).extra).toBe(0)
})

test('no valores negativos en horas', () => {
    expect(salario(-20, 30000)).toMatch('valores invalidos')
})

test('Solo Valores Numericos en horas', () => {
    expect(salario('ba', 3000)).toMatch('valores invalidos')
})

test('Solo Valores Numericos en salrio ', () => {
    expect(salario(40, 'ba')).toMatch('valores invalidos')
})

test('Calculo del valor a pagar por las horas Extra', () => {
    expect(salario(49, 3000).extra).toBe(3600)
})

test('Calculo del valor del salario neto', () => {
    expect(salario(49, 3000).neto).toBe(147600)
})