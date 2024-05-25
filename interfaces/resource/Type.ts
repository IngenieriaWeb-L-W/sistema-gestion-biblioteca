export enum ResourceTypes {
  BOOK = "BOOK",
  MAGAZINE = "MAGAZINE",
  DVD = "DVD",
  COMICS = "COMICS",
  ENCYCLOPEDIA = "ENCYCLOPEDIA",
  DICTIONARY = "DICTIONARY",
  ARTICLE = "ARTICLE",
  REPORT = "REPORT",
  RESEARCH_PAPER = "RESEARCH_PAPER",
  EDUCATIONAL = "EDUCATIONAL",
}

export interface ResourceType {
  type: ResourceTypes;
  maxLoanDays: number;
}
