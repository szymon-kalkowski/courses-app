import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoursesService } from './courses.service';
import { ReadCourse } from '../models/course/ReadCourse.model';
import { WriteCourse } from '../models/course/WriteCourse.model';
import { WriteAuthor } from '../models/author/WriteAuthor.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject<boolean>(false);
  private courses$$ = new BehaviorSubject<ReadCourse[]>([]);

  isLoading$ = this.isLoading$$.asObservable();
  courses$ = this.courses$$.asObservable();

  constructor(private coursesService: CoursesService) {}

  getAll(): void {
    this.isLoading$$.next(true);

    this.coursesService.getAll().subscribe(
      (response) => {
        this.courses$$.next(response.result as ReadCourse[]);
      },
      (error) => console.error('Error fetching courses', error),
      () => this.isLoading$$.next(false)
    );
  }

  createCourse(course: WriteCourse): void {
    this.isLoading$$.next(true);

    this.coursesService.createCourse(course).subscribe(
      (_response) => {
        this.getAll();
      },
      (error) => console.error('Error creating course', error),
      () => this.isLoading$$.next(false)
    );
  }

  editCourse(id: string, course: WriteCourse): void {
    this.isLoading$$.next(true);

    this.coursesService.editCourse(id, course).subscribe(
      (_response) => {
        this.getAll();
      },
      (error) => console.error('Error editing course', error),
      () => this.isLoading$$.next(false)
    );
  }

  getCourse(id: string): void {
    this.isLoading$$.next(true);

    this.coursesService.getCourse(id).subscribe(
      (_response) => {},
      (error) => console.error('Error fetching course', error),
      () => this.isLoading$$.next(false)
    );
  }

  deleteCourse(id: string): void {
    this.isLoading$$.next(true);

    this.coursesService.deleteCourse(id).subscribe(
      (_response) => {
        this.getAll();
      },
      (error) => console.error('Error deleting course', error),
      () => this.isLoading$$.next(false)
    );
  }

  filterCourses(filterCriteria: {
    duration?: string[];
    creationDate?: string[];
    description?: string[];
    title?: string[];
  }): void {
    this.isLoading$$.next(true);

    this.coursesService.filterCourses(filterCriteria).subscribe(
      (response) => {
        this.courses$$.next(response.result as ReadCourse[]);
      },
      (error) => console.error('Error filtering courses', error),
      () => this.isLoading$$.next(false)
    );
  }

  getAllAuthors(): void {
    this.isLoading$$.next(true);

    this.coursesService.getAllAuthors().subscribe(
      (_response) => {},
      (error) => console.error('Error fetching authors', error),
      () => this.isLoading$$.next(false)
    );
  }

  createAuthor(author: WriteAuthor): void {
    this.isLoading$$.next(true);

    this.coursesService.createAuthor(author).subscribe(
      (_response) => {
        this.getAllAuthors();
      },
      (error) => console.error('Error creating author', error),
      () => this.isLoading$$.next(false)
    );
  }

  getAuthorById(id: string): void {
    this.isLoading$$.next(true);

    this.coursesService.getAuthorById(id).subscribe(
      (_response) => {},
      (error) => console.error('Error fetching author', error),
      () => this.isLoading$$.next(false)
    );
  }
}
