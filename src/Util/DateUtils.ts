export const convertUTCDateToLocalDate = (date: Date) => {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
}

export const formatDateForMetrics = (value: string) => {
  if (!value) return '';
  const date = new Date(value);
  return date.toLocaleDateString(["en-US"], {weekday: 'long', month: 'long', day: 'numeric'})
}

export const isRewardDateExpired = (date: Date) => {
  const today = new Date();
  return date < today;
}

export const formatDateRange = (start?: Date, end?: Date) => {
  if (!start && !end) return 'All Time';
  return `${start?.toLocaleDateString(["en-US"], {month: 'long', day: 'numeric'})} - ${end?.toLocaleDateString(["en-US"], {month: 'long', day: 'numeric'})}`;
}
