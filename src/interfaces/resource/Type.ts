export enum ResourceTypes {
  ALL = "ALL",
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

export const getResourceTypeByString = (type: string): ResourceTypes => {
  switch (type) {
    case "BOOK":
      return ResourceTypes.BOOK;
    case "MAGAZINE":
      return ResourceTypes.MAGAZINE;
    case "DVD":
      return ResourceTypes.DVD;
    case "COMICS":
      return ResourceTypes.COMICS;
    case "ENCYCLOPEDIA":
      return ResourceTypes.ENCYCLOPEDIA;
    case "DICTIONARY":
      return ResourceTypes.DICTIONARY;
    case "ARTICLE":
      return ResourceTypes.ARTICLE;
    case "REPORT":
      return ResourceTypes.REPORT;
    case "RESEARCH_PAPER":
      return ResourceTypes.RESEARCH_PAPER;
    case "EDUCATIONAL":
      return ResourceTypes.EDUCATIONAL;
    default:
      return ResourceTypes.ALL;
  }
};

export interface ResourceType {
  type: ResourceTypes;
  maxLoanDays: number;
}
