import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CopieComponent } from './copie/copie.component';
const routes: Routes = [
  { path: 'copies', component: CopieComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
