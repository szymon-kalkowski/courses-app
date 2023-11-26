export interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: Author[];
}

export interface Author {
  id: string;
  name: string;
}
