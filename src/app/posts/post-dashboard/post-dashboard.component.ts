import { PostService } from './../post.service';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {

  flag: false;
  title: string;
  likes: number;
  image: string = null;
  content: string;

  buttonText: string = "Create Post";

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  hola;


  constructor(private auth: AuthService, private postService: PostService, private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  createPost() {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image,
      published1(date: Date): string {
        const day = date.getDate();

        return `${day}`;
      },
      likes: this.likes,
      title: this.title,
      flag: true
    };
    this.postService.create(data)
    this.title = ''
    this.content = ''
    this.buttonText = 'Your Post Has Been Created'
    setTimeout(() => (this.buttonText = "Create Post"), 3000);
  }

  uplodeImage(event) {
    const file = event.target.files[0]
    const path = `posts/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('Only Image Files')
    } else {
      const task = this.storage.upload(path, file);
      const ref = this.storage.ref(path);
      this.downloadURL = ref.getDownloadURL()
      this.uploadPercent = task.percentageChanges()
      // console.log('Image Uploaded!');
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL = ref.getDownloadURL()
          this.downloadURL.subscribe(url => (this.image = url));
        })
      )
        .subscribe();
    }
  }

  date() {
    // this.hola = .toLocalString();
  }

}
