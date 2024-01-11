import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReadCourse } from '../models/course/ReadCourse.model';
import { WriteCourse } from '../models/course/WriteCourse.model';
import { ReadAuthor } from '../models/author/ReadAuthor.model';
import { WriteAuthor } from '../models/author/WriteAuthor.model';

interface CourseResponse {
  readonly successful: boolean;
  readonly result: ReadCourse[] | ReadCourse;
}

interface AuthorResponse {
  readonly successful: boolean;
  readonly result: ReadAuthor[] | ReadAuthor;
}

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  getAll(): Observable<CourseResponse> {
    return this.http.get<CourseResponse>(this.apiUrl + '/courses/all');
  }

  createCourse(course: WriteCourse): Observable<CourseResponse> {
    return this.http.post<CourseResponse>(this.apiUrl + '/courses/add', course);
  }

  editCourse(id: string, course: WriteCourse): Observable<CourseResponse> {
    return this.http.put<CourseResponse>(
      this.apiUrl + `/courses/${id}`,
      course
    );
  }

  getCourse(id: string): Observable<CourseResponse> {
    return this.http.get<CourseResponse>(this.apiUrl + `/courses/${id}`);
  }

  deleteCourse(id: string): Observable<CourseResponse> {
    return this.http.delete<CourseResponse>(this.apiUrl + `/courses/${id}`);
  }

  filterCourses(filterCriteria: {
    duration?: string[];
    creationDate?: string[];
    description?: string[];
    title?: string[];
  }): Observable<CourseResponse> {
    let params = new HttpParams();

    if (filterCriteria.duration) {
      params = params.set('duration', filterCriteria.duration.join(','));
    }
    if (filterCriteria.creationDate) {
      params = params.set(
        'creationDate',
        filterCriteria.creationDate.join(',')
      );
    }
    if (filterCriteria.description) {
      params = params.set('description', filterCriteria.description.join(','));
    }
    if (filterCriteria.title) {
      params = params.set('title', filterCriteria.title.join(','));
    }

    return this.http.get<CourseResponse>(this.apiUrl + '/courses/filter', {
      params,
    });
  }

  getAllAuthors(): Observable<AuthorResponse> {
    return this.http.get<AuthorResponse>(this.apiUrl + '/authors/all');
  }

  createAuthor(author: WriteAuthor): Observable<AuthorResponse> {
    return this.http.post<AuthorResponse>(this.apiUrl + '/authors/add', author);
  }

  getAuthorById(id: string): Observable<AuthorResponse> {
    return this.http.get<AuthorResponse>(this.apiUrl + `/authors/${id}`);
  }
}
