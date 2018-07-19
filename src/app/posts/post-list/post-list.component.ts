import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post';
import { PostService } from '../post.service';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>

  flag =true
  likes =0

  constructor(private postService: PostService, public auth: AuthService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts()
    console.log(this)
  }

  // redirect(data){
  //   this.router.navigate(['/posts',{id:data}])
  // }

  delete(id: string) {
    this.postService.delete(id)
  }

  like(l)
  {
    this.flag =!this.flag
    this.likes=0

    if(this.flag==true)
      {   
        console.log(this.likes+1)
         return this.likes +1
      }
      else
      console.log(this.likes)
        return this.likes
        
  }

  
    

}
