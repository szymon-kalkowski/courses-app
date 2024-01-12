import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ReadAuthor } from 'src/app/models/author/ReadAuthor.model';
import { ReadCourse } from 'src/app/models/course/ReadCourse.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  id: string | null = null;
  course: ReadCourse | null = null;
  constructor(
    public fb: FormBuilder,
    public library: FaIconLibrary,
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    library.addIconPacks(fas);
    this.id = route.snapshot.paramMap.get('id') || null;
    if (this.id) {
      this.coursesService.getCourse(this.id).subscribe((response) => {
        this.course = response.result as ReadCourse;
        this.initForm();
      });
    }
  }
  courseForm!: FormGroup;
  // Use the names `title`, `description`, `author`, 'authors' (for authors list), `duration` for the form controls.

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.courseForm = this.fb.group({
      title: [this.course?.title || '', [Validators.required]],
      description: [this.course?.description || '', [Validators.required]],
      author: ['', [Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
      authors: this.fb.array(this.course?.authors || [], [Validators.required]),
      duration: [
        this.course?.duration || 0,
        [Validators.required, Validators.min(0)],
      ],
    });
  }

  getAuthors(): FormArray {
    return this.courseForm.get('authors') as FormArray;
  }

  addAuthor() {
    const author = this.courseForm.get('author')?.value;
    this.coursesService.createAuthor({ name: author }).subscribe((response) => {
      (this.courseForm.get('authors') as FormArray).push(
        this.fb.control((response.result as ReadAuthor).id)
      );
    });
    this.courseForm.get('author')?.reset();
  }

  removeAuthor(index: number) {
    (this.courseForm.get('authors') as FormArray).removeAt(index);
  }

  onSubmit(): void {
    if (this.course) {
      this.coursesService.editCourse(this.id!, this.courseForm.value).subscribe(
        (_response) => {
          this.router.navigate(['/courses']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.coursesService.createCourse(this.courseForm.value).subscribe(
        (_response) => {
          this.cancel();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  cancel(): void {
    this.courseForm.reset();
  }
}
