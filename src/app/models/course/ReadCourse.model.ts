export interface ReadCourse {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly duration: number;
  readonly authors: string[];
  readonly creationDate: string;
}
