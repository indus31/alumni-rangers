import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NoAuthGuard } from './core/guards/no.auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    // canMatch: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module')
    .then( m => m.LoginPageModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'intern',
    loadChildren: () => import('./intern/intern.module').then( m => m.InternPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
