import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from 'vitest';
import { LoginProtetora } from "..";


describe("<LoginProtetora/>", () => {

    beforeAll(() => {
        render(<LoginProtetora/>)

    })

    it('Deve renderizar o LoginProtetora corretamente', () => {
        const login = screen.getByTestId("login-id");
        expect(login).not.toBeNull();
    })

    it('Deve conter um h1 com o titulo de "Bem vindo(a) de volta Protetor(a)!" ', async () => {
        const h1 = await screen.queryByText("Bem vindo(a) de volta Protetor(a)!");
        expect(h1).not.toBeNull();
    })

    it("Deve conter um formulario para login", () => {
        const form = screen.findAllByTestId("formulario-login-id");
        expect(form).not.toBeNull();
    })

    it("Deve conter o botão 'entrar' para logar", () => {
        const button = screen.findAllByTestId("entrar-button-id");
        expect(button).not.toBeNull();
    })


    
 

})