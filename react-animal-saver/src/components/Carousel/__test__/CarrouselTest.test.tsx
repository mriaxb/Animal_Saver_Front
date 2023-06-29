import { render, screen } from "@testing-library/react";
import { Carrousel } from "..";
import { beforeAll, describe, expect, it } from 'vitest';


describe("<Carrousel/>", () => {

    beforeAll(() => {
        render(<Carrousel/>)

    })

    it('Deve renderizar o Carrousel corretamente', () => {
        const carrousel = screen.getByTestId("carrousel-id");
        expect(carrousel).not.toBeNull();
    });

})