/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { WrappedApp, App } from './App';

describe('App', () => {
    it('Renders hello world', () => {
        // Arrange
        render(<WrappedApp />);
        // Act
        const homePageH1Element = screen.getByRole('heading', { level: 1 });
        // Assert
        expect(homePageH1Element).toHaveTextContent('Hello World');
    });

    it('Renders not found if invalid path', () => {
        // Arrange
        render(
            <MemoryRouter initialEntries={['/banana']}>
                <App />
            </MemoryRouter>
        );
        // Act
        const divElement = screen.getByRole('heading', {
            level: 1,
        });

        expect(divElement).toHaveTextContent('Not Found');
    });
});
