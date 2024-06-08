export interface ResourceInstance {
  id: string;
  name: string;
  status: InstanceStatus;
  lang: InstanceLang;
  createdAt: Date;
  updatedAt: Date;
}

export enum InstanceStatus {
  GOOD = "GOOD",
  POOR = "POOR",
  DAMAGED = "DAMAGED",
  LOST = "LOST",
  ARCHIVED = "ARCHIVED",
}

export enum InstanceLang {
  LANG_EN = "LANG_EN", // English
  LANG_ES = "LANG_ES", // Spanish
  LANG_FR = "LANG_FR", // French
  LANG_DE = "LANG_DE", // German
  LANG_HI = "LANG_HI", // Hindi
  LANG_RU = "LANG_RU", // Russian
  LANG_JA = "LANG_JA", // Japanese
  LANG_ZH = "LANG_ZH", // Chinese
  LANG_PT = "LANG_PT", // Portuguese
  LANG_AR = "LANG_AR", // Arabic
  LANG_OTHER = "LANG_OTHER", // Other
}
