import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HomeComponent } from './home/home.component';
import { SearchKeyService } from './searchkey.service';

const appRoute:Routes=[
     {path:'', redirectTo:'/top-headlines',pathMatch:'full'},
     {path:'auth',component:AuthComponent},
     {path:'bookmarks',component:BookmarksComponent,canActivate:[AuthGuard]},
    {path:'top-headlines',component:HomeComponent,canActivate:[AuthGuard]},
    {path:':category',component:HomeComponent},
   
    
]

@NgModule({
    imports:[RouterModule.forRoot(appRoute)],
    exports:[RouterModule],
    providers:[SearchKeyService,AuthService]
})
export class AppRoutingModule{

}