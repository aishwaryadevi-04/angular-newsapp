// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { BehaviorSubject, Observable, Subscription } from "rxjs";
// import { Subject } from "rxjs-compat";



// @Injectable({providedIn:'root'})
// export class CategoryService {
//   private selectedArticles: string[] = [];
  
//   constructor(private http: HttpClient) {}
//   private selectedArticlesSubj = new BehaviorSubject<string>('')


//   displayCategory(category: string) {
//     const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=d7e2c6c863b9417ba3b2b0f0fb699bc4`;

//     this.http.get<any>(url).subscribe(news => {
//       this.selectedArticles = news.articles;
//       this.selectedValue=this.selectedArticlesSubj.asObservable()
//       this.selectedArticlesSubj.next(this.selectedArticles)
//       console.log(this.selectedArticles);
//     });
//   }
// }



import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable} from "rxjs";

@Injectable({providedIn:'root'})
export class CategoryService {
  private selectedArticles: any[] = [];
  private selectedArticlesSubj = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient,private router:Router) {}

  displayCategory(category: string) {
   const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=ef43ba4dc25d467b92728ceea47d0a7b`;
   this.router.navigate([`/${category}-news`])

    this.http.get<any>(url).subscribe(news => {
      this.selectedArticles = news.articles;
      this.selectedArticlesSubj.next(this.selectedArticles);
    });
  }

  getSelectedArticles(): Observable<any[]> {
    return this.selectedArticlesSubj.asObservable();
  }
}

