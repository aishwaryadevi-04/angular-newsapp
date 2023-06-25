import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DropdownDirective } from './dropdown.directive';
import {AppRoutingModule} from './app.routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchKeyService } from './searchkey.service';
import { FilterPipe } from './filter.pipe';
import { CategoryService } from './category.service';
import {  BookmarksService } from './bookmarks/bookmarks.service';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { User } from './auth/user.model';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthEmailService } from './auth/authemail.service';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DropdownDirective,
    BookmarksComponent,
    FilterPipe,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ShareButtonsModule.withConfig({
      debug:true
    }),
    ShareIconsModule
  ],
  providers: [SearchKeyService,CategoryService,BookmarksService,AuthService,AuthGuard ,AuthEmailService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
