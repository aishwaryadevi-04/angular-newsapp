import { Pipe, PipeTransform } from "@angular/core";
// import { NewsArticle } from "src/app/news.model";

@Pipe({name:'filterPipe'})
export class FilterPipe implements PipeTransform{
    transform(articles:any[],searchText:string){
        if(!searchText)
        return articles;
        searchText=searchText.toLowerCase()
        return articles.filter(article=>{
            return article.title.toLowerCase().includes(searchText)
        })
    }
}