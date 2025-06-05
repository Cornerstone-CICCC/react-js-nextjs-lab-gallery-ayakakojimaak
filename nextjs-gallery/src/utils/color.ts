// src/utils/color.ts

/**
 * Generates a stable color code from ID
 * @param id Numeric ID
 * @returns 6-digit hexadecimal color code (uppercase)
 */
export const colorFromId = (id: number): string => {
  return (id * 1234567).toString(16).padStart(6, "0").slice(0, 6).toUpperCase();
};
