/** Exported from Kaskobi's Novation RGB Palette. */
export const defaultRgbPalette = [
  "030303",
  "1f1f1f",
  "7f7f7f",
  "ffffff",
  "ff4b4b",
  "ff0303",
  "570303",
  "1b0303",
  "ffbb6b",
  "ff5303",
  "571f03",
  "271b03",
  "ffff4b",
  "ffff03",
  "575703",
  "1b1b03",
  "87ff4b",
  "53ff03",
  "1f5703",
  "132b03",
  "4bff4b",
  "03ff03",
  "035703",
  "031b03",
  "4bff5f",
  "03ff1b",
  "03570f",
  "031b03",
  "4bff87",
  "03ff57",
  "03571f",
  "031f13",
  "4bffb7",
  "03ff97",
  "035737",
  "031b13",
  "4bc3ff",
  "03a7ff",
  "034353",
  "030f1b",
  "4b87ff",
  "0357ff",
  "031f57",
  "03071b",
  "4b4bff",
  "0303ff",
  "030357",
  "03031b",
  "874bff",
  "5303ff",
  "1b0363",
  "0f032f",
  "ff4bff",
  "ff03ff",
  "570357",
  "1b031b",
  "ff4b87",
  "ff0353",
  "57031f",
  "230313",
  "ff1703",
  "973703",
  "775303",
  "436303",
  "033b03",
  "035737",
  "03537f",
  "0303ff",
  "03474f",
  "2703cb",
  "7f7f7f",
  "1f1f1f",
  "ff0303",
  "bbff2f",
  "afeb07",
  "63ff0b",
  "0f8b03",
  "03ff87",
  "03a7ff",
  "032bff",
  "3f03ff",
  "7b03ff",
  "af1b7b",
  "3f2303",
  "ff4b03",
  "87df07",
  "73ff17",
  "03ff03",
  "3bff27",
  "57ff6f",
  "37ffcb",
  "5b8bff",
  "3353c3",
  "877fe7",
  "d31fff",
  "ff035b",
  "ff7f03",
  "b7af03",
  "8fff03",
  "835b07",
  "3b2b03",
  "134b0f",
  "0f4f37",
  "17172b",
  "171f5b",
  "673b1b",
  "a7030b",
  "db533f",
  "d76b1b",
  "ffdf27",
  "9fdf2f",
  "67b30f",
  "1f1f2f",
  "dbff6b",
  "7fffbb",
  "9b97ff",
  "8f67ff",
  "3f3f3f",
  "737373",
  "dfffff",
  "9f0303",
  "370303",
  "1bcf03",
  "074303",
  "b7af03",
  "3f3303",
  "b35f03",
  "4b1703"
];

/**
 * Get the HEX color of a specified velocity.
 * Returned as `#RRGGBB`.
 */
export const getHexFromVelocity = (velocity: number) => {
  return "#" + defaultRgbPalette[velocity];
};
