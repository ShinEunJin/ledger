import numeral from 'numeral';
import {io} from 'socket.io-client';

const socket = io('https://shin.loca.lt', {
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 500,
});

export const G_backgroundColor = '#FAEDF0';

global.$numeral = numeral;
global.$socket = socket;
