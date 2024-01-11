import { ReadAuthor } from '../author/ReadAuthor.model';

export interface Course {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly duration: number;
  readonly authors: ReadAuthor[];
  readonly creationDate: string;
}
