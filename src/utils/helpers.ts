// DECODE
/* eslint-disable @typescript-eslint/no-explicit-any */
export const decodeSlug = (name: string) => {
  if (!name) return "";
  const words = name.split("-");
  if (words.length === 1) return name[0].toUpperCase() + name.slice(1);
  return words
    .map((_name) => _name[0].toLowerCase() + _name.slice(1))
    .join(" ");
};

export const labelValueMap = <T>(
  arr: T[]
): { label: string; value: string }[] =>
  arr.map((item) => ({ label: (item as any).name, value: (item as any).id }));