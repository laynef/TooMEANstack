import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core' ;
import { RootComponent } from './components/root/root.component';

export const routes: ModuleWithProviders = RouterModule.forRoot([
   { path: '',
        component: RootComponent
        // children: [
        // { path: '', component: Notes },
        // { path: 'about', component: About }
        // ]
    },
    { path: '**', redirectTo: '' }
]);