import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFamilyComponent } from './reusable-component/search-family/search-family.component';
import { SearchOldMemberComponent } from './reusable-component/search-old-member/search-old-member.component';
import { UpdateFamilyComponent } from './reusable-component/update-family/update-family.component';

const routes: Routes = [
  { path: 'search', component: SearchFamilyComponent },
  { path: 'update', component: UpdateFamilyComponent },
  { path: 'search-old', component: SearchOldMemberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
