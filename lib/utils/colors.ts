/**
 * Converts a CSS variable to RGBA format with the specified transparency.
 * @param cssVar String "var(--name)" or "--name"
 * * original color must be in HEX-format
 * @param opacity Number from 0 to 1 (e.g. 0.5)
 * @returns String in the format "rgba(r, g, b, a)"
 */
export const convertToRgba = (cssVar: string, opacity: number): string => {
  const variableName = cssVar.includes("var(")
    ? cssVar.split("(")[1].split(")")[0]
    : cssVar;

  const rootStyles = getComputedStyle(document.documentElement);
  const colorValue = rootStyles
    .getPropertyValue(variableName.trim())
    .trim()
    .replace("#", "");

  const finalValue =
    colorValue.length === 3 ? colorValue + colorValue : colorValue;

  if (!finalValue || !/^([0-9a-fA-F]{6})$/.test(finalValue))
    return `rgba(0, 0, 0, ${opacity})`;

  if (opacity < 0 || opacity > 1) {
    opacity = 1;
  }

  const r = parseInt(finalValue.slice(0, 2), 16);
  const g = parseInt(finalValue.slice(2, 4), 16);
  const b = parseInt(finalValue.slice(4, 6), 16);

  const result = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  return result;
};
