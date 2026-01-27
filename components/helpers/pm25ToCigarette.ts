// lib/pm25ToCigarette.ts

export function pm25ToCigarettes(pm25: number) {
  if (!pm25 || pm25 <= 0) {
    return {
      cigarettesPerDay: 0,
      cigarettesPerYear: 0,
    };
  }

  const cigarettesPerDay = +(pm25 / 22).toFixed(2);
  const cigarettesPerYear = +(cigarettesPerDay * 365).toFixed(0);

  return {
    cigarettesPerDay,
    cigarettesPerYear,
  };
}
