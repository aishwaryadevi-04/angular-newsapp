import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BookmarksService } from './bookmarks/bookmarks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  constructor(private authService: AuthService,private bookmark:BookmarksService) {}
  ngOnInit() {
    this.authService.autoLogin();
   
    
     //this.storeLocal()
   
  }
  

  // storeLocal(){
  //   console.log('called');
  //   this.bookmark.showBookmarks().subscribe(bookmarks => {
  //     this.bookmark.fetchedBookmarks = bookmarks;
  //   localStorage.setItem('bookmarks', JSON.stringify(this.bookmark.fetchedBookmarks));
  //   const storedBookmarks = localStorage.getItem('bookmarks');
  //     this.bookmark.fetchedBookmarks=JSON.parse(storedBookmarks);
  //    console.log(this.bookmark.fetchedBookmarks)
  //   })
  // }
}
