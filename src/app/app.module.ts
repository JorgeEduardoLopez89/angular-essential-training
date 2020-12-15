import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http'
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component'
import { FavoriteDirective } from './favorite.directive'
import { CategoryListPipe } from './category-list.pipe';
import { lookupListsToken, lookupLists } from './providers'
import { MockXHRBackend } from './mock-xhr-backend'
import { routes } from './app.routing'
import { CategoryListComponent } from './category-list.component';

@NgModule({
    imports: [
        BrowserModule,        
        HttpClientModule,
        routes        
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListComponent ,
        CategoryListPipe        
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        { provide: lookupListsToken, useValue: lookupLists },
        { provide: HttpXhrBackend, useClass: MockXHRBackend }
    ]
})
export class AppModule {}