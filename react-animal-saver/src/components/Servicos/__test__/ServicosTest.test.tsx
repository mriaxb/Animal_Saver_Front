import { render, screen } from "@testing-library/react";
import { Servicos } from "..";
import { beforeAll, describe, expect, it } from 'vitest';


describe("<Servicos/>", () => {

    beforeAll(() => {
        render(<Servicos/>)

    })

    it('Deve renderizar o elemento Servicos corretamente', () => {
        const servicos = screen.getByTestId("servicos-id");
        expect(servicos).not.toBeNull();
    });

    it('Deve conter um h1 com o titulo de "Serviços" ', async () => {
        const h1 = await screen.queryByText("SERVIÇOS");
        expect(h1).not.toBeNull();
    })

})