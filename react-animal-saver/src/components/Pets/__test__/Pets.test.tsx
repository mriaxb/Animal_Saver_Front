import { render, screen } from '@testing-library/react';
import {  beforeAll, describe, expect, it } from 'vitest';
import { Pets } from '..';
import { Button, Card, Modal } from 'react-bootstrap';

describe('<Pets>', () =>{
    beforeAll(() => {
        render(<Pets />);
    })
    it('Deve conter um h1 com texto "Pets"', () => {
        const h1 = screen.getByText("Pets");
        expect(h1).not.toBeNull();
    })

    it('Deve renderizar a imagem corretamente', () => {
        render(
              <img src="http://localhost:3000/uploads/image.jpg" alt="" />
        );
        const imagem = screen.getByAltText('');
        expect(imagem).toBeTruthy();
      });

      it('Deve renderizar o texto "Raça:" corretamente', () => {
        const pet = { raca: 'Raça do Pet' };
    
        render(
          <Card.Body>
            <span>
              <strong>Raça:</strong>
              <span>{pet.raca}</span>
            </span>
          </Card.Body>
        );
    
        const textoRaca = screen.getByText('Raça:');
        expect(textoRaca).toBeTruthy();
      });

      it('Deve renderizar o texto "Porte físico" corretamente', () => {
        const pet = { perfilFisico: 'Perfil fisico do pet' };
    
        render(
          <Card.Body>
            <span>
              <strong>Porte físico:</strong>
              <span>{pet.perfilFisico}</span>
            </span>
          </Card.Body>
        );
    
        const porteFisico = screen.getByText('Porte físico:');
        expect(porteFisico).toBeTruthy();
      });

      it('Deve renderizar o botão corretamente', () => {
        render(
          <div className="text-center mt-4 px-4">
            <Button data-testid="button" variant="primary">
              Detalhar Pets
            </Button>
          </div>
        );
    
        const button = screen.getByTestId('button');
        expect(button).toBeTruthy();
      });
})