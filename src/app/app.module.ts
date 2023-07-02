import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './reusable-component/header/header.component';
import { SearchFamilyComponent } from './reusable-component/search-family/search-family.component';
import { UpdateFamilyComponent } from './reusable-component/update-family/update-family.component';
import { MemberSummaryComponent } from './reusable-component/member-summary/member-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FamilyMemberTableComponent } from './reusable-component/family-member-table/family-member-table.component' 
import {MatDialogModule} from '@angular/material/dialog';
import { AddEditFamilyMemberComponent } from './reusable-component/add-edit-family-member/add-edit-family-member.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SearchOldMemberComponent } from './reusable-component/search-old-member/search-old-member.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './reusable-component/footer/footer.component';
import { AddFamilyHeadDialogueComponent } from './reusable-component/add-family-head-dialogue/add-family-head-dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFamilyComponent,
    UpdateFamilyComponent,
    MemberSummaryComponent,
    FamilyMemberTableComponent,
    AddEditFamilyMemberComponent,
    SearchOldMemberComponent,
    FooterComponent,
    AddFamilyHeadDialogueComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
