import { render } from '@testing-library/react';
import App from 'App';

test('Renders app', () => {
    const view = render(<App />);
    expect(view).toBeDefined();
});
