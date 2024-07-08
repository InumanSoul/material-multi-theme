export interface Color {
  main: string;
}

export interface Palette {
  primary: Color;
  secondary: Color;
  error: Color;
}

export interface Theme {
  palette: Palette;
}