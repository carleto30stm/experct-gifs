/* eslint-disable no-undef */

import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/commponents"


describe('teste de gifgrib', ()=>{
    const category = 'One Punch'
    test ('debe recibir una categoria', ()=>{
        render(<GifGrid category={category}/>)
        expect(screen.getByText(category)).toBeTruthy();
    })
    

})