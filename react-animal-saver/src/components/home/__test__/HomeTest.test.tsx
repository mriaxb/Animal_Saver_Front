import { render, screen } from "@testing-library/react";
import { Home } from "..";
import { beforeAll, describe, expect, it } from 'vitest';


describe("<Home/>", () => {

    beforeAll(() => {
        render(<Home/>)

    })

    it('Deve renderizar a Home corretamente', () => {
        const home = screen.getByTestId("home-id");
        expect(home).not.toBeNull();
    });

})