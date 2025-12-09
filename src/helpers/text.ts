export function capitalizeFirstLetter(text: string) {
  const textArr = text.trim().split('');
  const firstLetter = textArr[0].toUpperCase();
  return `${firstLetter}${textArr.filter((_, id) => id > 0).join('').trim()}`;
}