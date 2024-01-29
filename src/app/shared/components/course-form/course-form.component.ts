import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ReadAuthor } from 'src/app/models/author/ReadAuthor.model';
import { CoursesService } from 'src/app/services/courses.service';
import { CoursesFacade } from 'src/app/store/courses/courses.facade';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  id: string | null = null;
  course$ = this.coursesFacade.course$;
  constructor(
    public fb: FormBuilder,
    public library: FaIconLibrary,
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,
    private coursesFacade: CoursesFacade
  ) {
    library.addIconPacks(fas);
    this.id = route.snapshot.paramMap.get('id') || null;
    if (this.id) {
      this.coursesFacade.getSingleCourse(this.id);
      this.initForm();
    } else {
    }
  }
  courseForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.course$.subscribe((course) => {
      this.courseForm = this.fb.group({
        title: [this.id ? course?.title : '', [Validators.required]],
        description: [
          this.id ? course?.description : '',
          [Validators.required],
        ],
        author: ['', [Validators.pattern(/^[a-zA-Z0-9 ]*$/)]],
        authors: this.fb.array(this.id ? course?.authors! : [], [
          Validators.required,
        ]),
        duration: [
          this.id ? course?.duration : 0,
          [Validators.required, Validators.min(0)],
        ],
      });
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
    if (this.id) {
      this.coursesFacade.editCourse(this.id, this.courseForm.value);
      this.router.navigate(['/courses']);
    } else {
      this.coursesFacade.createCourse(this.courseForm.value);
      this.cancel();
    }
  }

  cancel(): void {
    this.courseForm.reset();
  }
}
