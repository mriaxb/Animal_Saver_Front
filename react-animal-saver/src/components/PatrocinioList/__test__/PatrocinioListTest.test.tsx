import { render, screen } from "@testing-library/react";
import { PatrocinioList } from "..";
import { beforeAll, describe, expect, it } from 'vitest';


describe("<PatrocinioList/>", () => {

    beforeAll(() => {
        render(<PatrocinioList/>)

    })

    it('Deve renderizar o PatrocinioList corretamente', () => {
        const patrocinio = screen.getByTestId("patrocinio-id");
        expect(patrocinio).not.toBeNull();
    });

    it('o link da imagemn deve direcionar para a rota de "https://prontodog.com.br/"', () => {
        const link = screen.getByRole("link", { name: /logo pronto dog/i });
        expect(link.getAttribute("href")).toBe("https://prontodog.com.br/");
    })

    it('o link da imagemn deve direcionar para a rota de "https://www.pti.org.br/"', () => {
        const link = screen.getByRole("link", { name: /logo do PTI/i });
        expect(link.getAttribute("href")).toBe("https://www.pti.org.br/");
    })

    it('o link da imagemn deve direcionar para a rota de "https://uniamerica.br/"', () => {
        const link = screen.getByRole("link", { name: /logo da Descomplica/i });
        expect(link.getAttribute("href")).toBe("https://uniamerica.br/");
    })

    it('o link da imagemn deve direcionar para a rota de "https://www.petz.com.br/"', () => {
        const link = screen.getByRole("link", { name: /logo da Petz/i });
        expect(link.getAttribute("href")).toBe("https://www.petz.com.br/");
    })

    it('o link da imagemn deve direcionar para a rota de "https://www.cobasi.com.br/"', () => {
        const link = screen.getByRole("link", { name: /logo da Cobasi/i });
        expect(link.getAttribute("href")).toBe("https://www.cobasi.com.br/");
    })

})