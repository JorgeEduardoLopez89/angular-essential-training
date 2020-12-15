import { Routes, RouterModule } from '@angular/router'
import { MediaItemListComponent } from './media-item-list.component'

const appRoutes: Routes = [    
    { path: 'add', loadChildren: () => import('./new-item/new-item.module').then((m) => m.NewItemModule ) }, //<== Lazy load a module
    { path: ':medium', component: MediaItemListComponent },
    { path: '', redirectTo: 'all', pathMatch: 'full' }
];

export const routes = RouterModule.forRoot(appRoutes);