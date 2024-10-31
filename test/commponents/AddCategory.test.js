/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/commponents/AddCategory"

describe('Prueba de AddCAtegory', () => { 
    
    test('Debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory= { ()=> {} }/>)

        const input = screen.getByRole('textbox')

        fireEvent.input(input, {target: {value: 'Saitama'}})
        expect(input.value).toBe('Saitama')
    })
    test('Debe de limpiar la caja de texto despues de enviar el formulario', () => {
        const inputValue = 'Saitama'
        render(<AddCategory onNewCategory= { ()=> {} }/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)

        expect(input.value).toBe('')
    })
    test('No debe llamar onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory= { onNewCategory }/>)

        const form = screen.getByRole('form')

        fireEvent.submit(form)

        expect(onNewCategory).not.toHaveBeenCalled()
    })

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama'
        const onNewCategory = jest.fn()
        render(<AddCategory onNewCategory= { onNewCategory }/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)

        expect(input.value).toBe('')
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })
 })