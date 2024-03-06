import { getCurrentDate } from './modules/current-date';

export function main<T>(example: string | T): void {
  console.log(`Now is ${getCurrentDate()}`);
  console.log(`Now is ${getCurrentDate()}`);
}

main(null);
