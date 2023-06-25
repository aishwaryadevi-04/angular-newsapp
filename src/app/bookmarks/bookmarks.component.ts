import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { BookmarksService } from './bookmarks.service';
import { Router } from "@angular/router";
import { AuthService } from '../auth/auth.service';
import { map, Observable, Subscription } from 'rxjs';
import { AuthEmailService } from '../auth/authemail.service';
import { HttpClient } from '@angular/common/http';
import { SearchKeyService } from '../searchkey.service';
import { bookmark } from '../bookmark.mode';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
  encapsulation:ViewEncapsulation.None
})

export class BookmarksComponent implements OnInit{
    bookmarks:any[]=[]
   fetchedBookmarks:any[]=[]
   
    private subscription?:Subscription
    constructor(private bookmark:BookmarksService, private router:Router,private auth:AuthService,private authEmailService:AuthEmailService,
      private http:HttpClient,private searchKey:SearchKeyService){}

      res=''
      searchans:any
      
ngOnInit(){
  this.searchans=this.searchKey.searchResult.subscribe(resultvalue => {
    this.res = resultvalue;
    console.log(this.res);
  })

  
   this.bookmark.showBookmarks().subscribe((bookmarks:bookmark[]) => {
    console.log(bookmarks); 
    if(bookmarks)
    this.fetchedBookmarks=bookmarks
    if(this.fetchedBookmarks.length==0)
    this.popout()
  });

   this.bookmark.getBookmarkUpdateListener().subscribe((response:any)=>{
    this.fetchedBookmarks=response
   
  })
}

remove(index:number){
this.bookmark.removeBookmark(index)
console.log('removing')
 }

 popout(){
  const popupMessage = document.getElementById('nobookmark-message');
  if (popupMessage) {
    popupMessage.style.display = 'block';
  }
 
    
}


redirectTo(url:string){
    window.location.href=url
    this.router.navigateByUrl( url);
  }
}