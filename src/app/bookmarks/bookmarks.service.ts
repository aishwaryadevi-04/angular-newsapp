import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core"
import { BehaviorSubject, map, Observable, Subject } from "rxjs";
import { AuthEmailService } from "../auth/authemail.service";
import { bookmark } from "../bookmark.mode";
import { BookmarksComponent } from "./bookmarks.component";


@Injectable({providedIn:'root'})
export class BookmarksService{
  constructor(private http:HttpClient,private authEmailService:AuthEmailService){}
  userEmail:string='';
  encodedEmail:string=''
    bookmarksChanged = new Subject<any[]>();
    
    bookmarks:any[]=[]

  
    
    private bookmarksUpdated = new BehaviorSubject<string[]>([])
    removeBookmark(index: number) {
      this.showBookmarks().subscribe(bookmarks => {
        this.fetchedBookmarks = bookmarks;
        this.fetchedBookmarks.splice(index, 1);
        console.log(this.fetchedBookmarks);
        let encodedEmail = this.authEmailService.getEmail();
        encodedEmail = encodedEmail.replace(/\./g, '*dot*').replace(/[^a-zA-Z0-9\*]+/g, '*special*');
        return this.http.put<any>(`https://news-app-1f8f4-default-rtdb.firebaseio.com/news/${encodedEmail}.json`, this.fetchedBookmarks)
          .subscribe(response => {
            this.bookmarksUpdated.next([...this.fetchedBookmarks]);
            console.log(response);
          });
      });
    }
    
    getBookmarkUpdateListener(): Observable<any[]> {
      return this.bookmarksUpdated.asObservable(); 
    }
    
   
   
fetchedBookmarks:any[]=[]


   saveBookmarks(article:any){
    let encodedEmail = this.authEmailService.getEmail();
    console.log(encodedEmail)
       encodedEmail = encodedEmail.replace(/\./g, '*dot*').replace(/[^a-zA-Z0-9\*]+/g, '*special*');
       this.showBookmarks().subscribe((bookmarks:bookmark[]) => {
        if(bookmarks){
        console.log(bookmarks); 
        this.fetchedBookmarks=bookmarks
        }
        else {
          console.log("No bookmarks found");
          this.fetchedBookmarks = [];
        }
        const existingBookmark = this.fetchedBookmarks.find((bookmark:bookmark) => bookmark.title === article.title);
        if (existingBookmark) {
         this.popout()
          return null;
        }
   
    else{
    this.popout();
    return this.http.post<any>(`https://news-app-1f8f4-default-rtdb.firebaseio.com/news/${encodedEmail}.json`, article)
    .subscribe(response=>{
      console.log(response)
    });
    
  }
  });
  
  }
  
popout(){
  const popupMessage = document.getElementById('popup-message');
  if (popupMessage) {
    popupMessage.style.display = 'block';
  }
 setTimeout(()=>{ popupMessage.style.display = 'none';},5000)
    
}

  showBookmarks() {
    let encodedEmail = this.authEmailService.getEmail();
    encodedEmail = encodedEmail.replace(/\./g, '*dot*').replace(/[^a-zA-Z0-9\*]+/g, '*special*');
    return this.http.get<any>(`https://news-app-1f8f4-default-rtdb.firebaseio.com/news/${encodedEmail}.json`).pipe(
      map(response => {
        if (response) {
          return Object.values(response);
        } else {
          return [];
        }
      }
    ));
  }
  
}

 
  
  



  



