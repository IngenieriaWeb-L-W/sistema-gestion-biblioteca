export const formatDate = (
  date: Date | string,
  includeTime: boolean = true
) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: includeTime ? "numeric" : undefined,
    minute: includeTime ? "numeric" : undefined,
    second: includeTime ? "numeric" : undefined,
  }).format(new Date(date));
};
