import {Injectable} from'@angular/core'
import { BehaviorSubject } from 'rxjs';
@Injectable({providedIn:'root'})
export class SearchKeyService{
   //constructor(private router:Router){}
    private searchResultSubject = new BehaviorSubject<string>('');
    searchResult = this.searchResultSubject.asObservable();
  
    setSearchResult(result: string) {
      this.searchResultSubject.next(result);
    }


    chosenCategory:string=''


    private categorySelectedSubject = new BehaviorSubject<string>('')
    categorySelected = this.categorySelectedSubject.asObservable();

    
    setCategorySelected(id:string){
       
        this.categorySelectedSubject.next(id)
    }
        

    private bookmarkedSubject = new BehaviorSubject<any>('')
    bookmarkedArticles(article:any){
        this.bookmarkedSubject.next(article);
    }
    
}