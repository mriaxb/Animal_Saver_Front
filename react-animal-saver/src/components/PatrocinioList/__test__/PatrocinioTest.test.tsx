import { render, screen } from "@testing-library/react";
import { PatrocinioList } from "..";
import { beforeAll, describe, expect, it } from 'vitest';


describe("<PatrocinioList/>", () => {

    beforeAll(() => {
        render(<PatrocinioList/>)

    })

    it('Deve renderizar o elemento PatrocinioList corretamente', () => {
        const patrocinio = screen.getByTestId("patrocinio-id");
        expect(patrocinio).not.toBeNull();
    });

    

})