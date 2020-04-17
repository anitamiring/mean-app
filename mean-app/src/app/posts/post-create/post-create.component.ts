import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms'

import { PostService } from '../posts.service';
import { form } from 'rxjs';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredTitle = '';
  enteredContent = '';

  constructor(public postService: PostService) { }

  ngOnInit(): void {
  }

  onAddPost = (form: NgForm) => {
    if(form.invalid){
      return;
    }
    console.log('onAddPost');
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }

}
