import { beforeAll, describe, expect, it } from 'vitest';
import { render, screen} from "@testing-library/react";
import { Home } from "..";



describe('<Home/>', () => {

    beforeAll(() => {
        render(<Home/>)
    });
    
    it('Deve renderizar a Home corretamente', () => {
        const home = screen.getByTestId("home");
        expect(home).not.toBeNull();
    });

    

})