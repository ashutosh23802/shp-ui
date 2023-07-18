import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFamilyComponent } from './pages/search-family/search-family.component';
import { SearchOldMemberComponent } from './pages/search-old-member/search-old-member.component';
import { UpdateFamilyComponent } from './reusable-component/update-family/update-family.component';
import { MemberProfileComponent } from './pages/member-profile/member-profile.component';

const routes: Routes = [
  { path: 'search', component: SearchFamilyComponent },
  { path: 'member-profile/:memberId', component: MemberProfileComponent },
  { path: 'search-old', component: SearchOldMemberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
