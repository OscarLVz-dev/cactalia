import { Component, Input } from '@angular/core';
import { InstagramService } from 'src/app/services/instagram.service';

@Component({
  selector: 'instagram-post-widget',
  templateUrl: './instagram-post-widget.component.html',
  styleUrls: ['./instagram-post-widget.component.scss']
})
export class InstagramPostWidgetComponent {

  constructor(private instagram: InstagramService) {}

  @Input()
  post_id:string;

  ngOnInit() {
    this.instagram.processEmbeddedInstagramPosts();
  }

}
