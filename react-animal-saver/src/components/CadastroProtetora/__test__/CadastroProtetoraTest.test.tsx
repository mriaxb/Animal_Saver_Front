import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from 'vitest';
import { CadastroProtetora } from "..";


describe("<CadastroProtetora/>", () => {

    beforeAll(() => {
        render(<CadastroProtetora/>)

    })

    it('Deve renderizar o CadastroProtetora corretamente', () => {
        const cadastroProtetor = screen.getByTestId("cadastro-protetor-id");
        expect(cadastroProtetor).not.toBeNull();
    })

    it('Deve conter um h1 com o titulo de "Seja um(a) Protetor(a)!" ', async () => {
        const h1 = await screen.queryByText("Seja um(a) Protetor(a)!");
        expect(h1).not.toBeNull();
    })

    it("Deve conter um formulario para cadastro", () => {
        const form = screen.findAllByTestId("formulario-id");
        expect(form).not.toBeNull();
    })

    it("Deve conter o botão 'cadastrar' para enviar o formulario", () => {
        const button = screen.findAllByTestId("cadastrar-button-id");
        expect(button).not.toBeNull();
    })
 

})