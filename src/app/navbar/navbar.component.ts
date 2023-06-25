import { Component, OnDestroy, OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { CategoryService } from '../category.service';

import { SearchKeyService } from '../searchkey.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
  isAuthenticated = false;
  private userSub:Subscription
  keywords=''
  constructor(private authService:AuthService,private setCategorySelected:CategoryService,private searchKey:SearchKeyService, private router:Router, private route:ActivatedRoute){
    this.userSub = new Subscription();
  }


 
 

ngOnInit(){
  this.userSub=this.authService.user.subscribe(user=>{
    this.isAuthenticated=!!user;
    console.log(this.isAuthenticated);
  })
}


search() {
  this.searchKey.setSearchResult(this.keywords);
}


category(id:string){
  this.setCategorySelected.displayCategory(id)
}


onLogout(){
  this.authService.logout()
}

ngOnDestroy(){
  this.userSub.unsubscribe()
}
}
