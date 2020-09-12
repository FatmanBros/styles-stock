import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleConstants } from './module/module-constants'
import { TopComponent } from './component/top/top.component';

const routes: Routes = [
  { path: '', redirectTo: 'TOP', pathMatch: 'full' },
  { path: 'TOP', component: TopComponent },
];

Object.keys(ModuleConstants.StylesComponents).forEach(key => {
  Object.keys(ModuleConstants.StylesComponents[key]).forEach(item => {
    routes.push({ path: key + '/' + item, component: ModuleConstants.StylesComponents[key][item].component });
  })
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
