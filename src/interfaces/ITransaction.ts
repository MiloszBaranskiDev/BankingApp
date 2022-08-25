interface IDetail {
  label: string;
  value: string | number | boolean;
}

export interface ITransaction {
  category: string;
  id: string;
  date: string;
  details: IDetail[];
}
