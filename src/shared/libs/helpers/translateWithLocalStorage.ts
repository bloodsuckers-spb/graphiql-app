export const translateWithLocalStorage = (
  ruString: string,
  enString: string
) => {
  const isRus =
    localStorage.getItem('i18nextLng') === 'ru' ||
    localStorage.getItem('i18nextLng') === 'ru-RU';

  return isRus ? ruString : enString;
};
