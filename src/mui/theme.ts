import { createTheme } from '@mui/material/styles';
import { bolnasite } from './palette/bolnasite';
import { wildCasino } from './palette/wildcasino';
import { Theme } from './palette/interface';
import { superSlots } from './palette/superslots';

const brand: string = import.meta.env.VITE_BRAND_NAME;

const availableThemes: { [key: string]: Theme } = {
  'bolnasite': bolnasite,
  'wildcasino': wildCasino,
  'superslots': superSlots,
};

export const theme = createTheme(availableThemes[brand]);