
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

import { SearchKeyService } from '../searchkey.service';
import { CategoryService } from '../category.service';
import {  BookmarksService } from '../bookmarks/bookmarks.service';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-news',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


 export class HomeComponent implements OnInit{
  @ViewChild('shareButtons',{static:false}) shareButtons:ElementRef | null = null
  showButtons=false;
  articles:any=[]
  filtered:any=[]
  categoryNews:any=[]
  
 constructor(private searchKey:SearchKeyService,private http:HttpClient,private router:Router,private categoryService:CategoryService,
  private bookmark:BookmarksService,private elref:ElementRef,private auth:AuthService){}

 topNews=this.http.get<any>('https://newsapi.org/v2/top-headlines?country=in&apiKey=ef43ba4dc25d467b92728ceea47d0a7b');

 
 result=this.topNews.subscribe(news=>{
  this.articles=news.articles;
  console.log(this.articles);
 })


  categorynews=this.categoryService.getSelectedArticles()
  .subscribe(news=>{
      this.articles= news;
      console.log(this.articles);
  })
  
redirectTo(url:string){
   window.location.href=url
   this.router.navigateByUrl( url);
}


res=''
category=''
searchans:any
categoryAns:any
bookmarkArticle=false;

ngOnInit(){
  console.log(this.auth.user)
  this.searchans=this.searchKey.searchResult.subscribe(resultvalue => {
    this.res = resultvalue;
    console.log(this.res);
    
  });


this.categoryAns=this.searchKey.categorySelected.subscribe(categoryValue=>{
    this.category=categoryValue;
    console.log(this.category);
    

})
}


onBookmark(article:any){
  this.bookmarkArticle=!this.bookmarkArticle;
  this.bookmark.saveBookmarks(article)
}


activeArticle:any;
onShare(article:any){
  this.activeArticle=article
  this.showButtons=!this.showButtons
}

}
