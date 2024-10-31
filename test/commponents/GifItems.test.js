/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifItems } from "../../src/commponents";


describe('Teste de componente GifItems', () => {
    const title = 'Saitama';
    const url = "https://media2.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=8a210d3e9rr4vzjgop42j2lc84yr3bl8jgv6pwrskicwv1tz&ep=v1_gifs_search&rid=giphy.gif&ct=g";

    // eslint-disable-next-line no-undef
    test('Debe de hacer match con el snapshot', () => {
      
        const { container } = render(<GifItems title={title} url={url} />);
        // eslint-disable-next-line no-undef
        expect(container).toMatchSnapshot();        
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
       
        render(<GifItems title={title} url={url} />);
        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    })
    test('Debe de mostrar el titulo en el componente', () => {
    
        render(<GifItems title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
    })  
    
})