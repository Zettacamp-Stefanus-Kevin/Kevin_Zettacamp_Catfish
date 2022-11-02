import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { first } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {

  isEdit: boolean = false;

  constructor(private dataService: DataService, private route: ActivatedRoute,
    private Router: Router,) { }

  postForm: any = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null),
    body: new FormControl(null),
    userId: new FormControl(null)
  })

  ngOnInit(): void {
    const id = this.route.snapshot.queryParamMap.get('userid');
    this.isEdit = id != null;

    if (this.isEdit) {
      this.dataService.posts
        .pipe(first((post) => post.length !== 0))
        .subscribe((Post) => {
          const update: any = Post.find((post) => post.id === id);
          this.setPost(update);
          console.log(update)
        });
    }
  }

  setPost(post: any) {
    this.postForm.setValue(post);
  }

  onSubmit() {
    if (this.isEdit) {
      this.dataService.updatePost(this.postForm.value)
      console.log('berhasil');
      // this.Router.navigate(['/list'])
    } else {
      this.dataService.createPost(this.postForm.value)
      console.log('berhasil');
      // this.Router.navigate(['/list'])
    }
  }



}
