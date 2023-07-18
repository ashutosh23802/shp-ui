import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './reusable-component/header/header.component';
import { SearchFamilyComponent } from './pages/search-family/search-family.component';
import { UpdateFamilyComponent } from './reusable-component/update-family/update-family.component';
import { RegistrationDetailComponent } from './reusable-component/member-summary/member-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FamilyMemberTableComponent } from './reusable-component/family-member-table/family-member-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEditFamilyMemberComponent } from './reusable-component/add-edit-family-member/add-edit-family-member.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SearchOldMemberComponent } from './pages/search-old-member/search-old-member.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './reusable-component/footer/footer.component';
import { AddFamilyHeadDialogueComponent } from './reusable-component/add-family-head-dialogue/add-family-head-dialogue.component';
import { MemberProfileComponent } from './pages/member-profile/member-profile.component';
import { FamilySideBarComponent } from './reusable-component/family-side-bar/family-side-bar.component';
import { RegistrationDetailViewComponent } from './reusable-component/registration-detail-view/registration-detail-view.component';
import { MemberCompleteDetailsComponent } from './reusable-component/member-complete-details/member-complete-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFamilyComponent,
    UpdateFamilyComponent,
    RegistrationDetailComponent,
    FamilyMemberTableComponent,
    AddEditFamilyMemberComponent,
    SearchOldMemberComponent,
    FooterComponent,
    AddFamilyHeadDialogueComponent,
    MemberProfileComponent,
    FamilySideBarComponent,
    RegistrationDetailViewComponent,
    MemberCompleteDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
