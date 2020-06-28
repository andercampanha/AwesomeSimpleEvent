// @flow strict-local

export const getCurrentTime: () => string = () => {
  const now = new Date();
  const hours: number = now.getHours();
  const minutes: number = now.getMinutes();
  const time: string = `${hours}:${assureTwoDigitNumber(minutes)}`;

  return time;
};

const assureTwoDigitNumber: (number: number) => string = number =>
  number / 10 > 1 ? `${number}` : `0${number}`;
