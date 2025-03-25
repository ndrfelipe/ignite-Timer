// dentro desse arquivo só terá código de definição de tipos de ts.
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

// criando uma tipagem pro styled-components
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}