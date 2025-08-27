import { Provider } from "@nestjs/common";

export const RAMDOM_ID = 'RANDOM_ID';

export const RandomProvider: Provider = {
  provide: RAMDOM_ID,
  useFactory: () => Math.floor(Math.random() * 1000),
};
