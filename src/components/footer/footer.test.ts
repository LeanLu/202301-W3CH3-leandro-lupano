import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Given Footer component', () => {
  describe('When new Footer is instanced', () => {
    test('Then it should create an object with the footer class', () => {
      document.body.innerHTML = `<slot></slot>`;
      const mockTitle = 'Test';
      const element = new Footer('slot', mockTitle);
      expect(element).toBeInstanceOf(Footer);
    });

    test('Then it should render a new template', () => {
      const subtitle = screen.getByText('Test');
      expect(subtitle).toBeInTheDocument();
    });
  });
});
