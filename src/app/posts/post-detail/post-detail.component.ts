import { PostService } from '../post.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;

  editing: boolean = false;
  

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router, public auth: AuthService) { }

  ngOnInit() {
    this.getPost();
    // console.log(this)
    //   this.postService.getPosts().subscribe(data => {
    //   console.log(data)
    // });
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.postService.getPostData(id).subscribe(data => this.post = data);
    // console.log(data)
    // });
  }

  updatePost() {
    const formData = {
      titile: this.post.title,
      content: this.post.content
    }
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.update(id, formData);
    this.editing = false;
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.delete(id);
    this.router.navigate(["/blog"]);
  }




}
