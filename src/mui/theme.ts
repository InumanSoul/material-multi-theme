import { createTheme } from '@mui/material/styles';
import { bolnasite } from './themes/bolnasite/bolnasite';
import { wildCasino } from './themes/wildcasino/wildcasino';
import { Theme } from './themes/interface';
import { superSlots } from './themes/superslots/superslots';

const brand: string = import.meta.env.VITE_BRAND_NAME;

const availableThemes: { [key: string]: Theme } = {
  'bolnasite': bolnasite,
  'wildcasino': wildCasino,
  'superslots': superSlots,
};

export const theme = createTheme(availableThemes[brand]);