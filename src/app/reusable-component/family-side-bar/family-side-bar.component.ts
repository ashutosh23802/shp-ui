import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewDirectoryService } from 'src/app/services/new-directory.service';
import { AddFamilyHeadDialogueComponent } from '../add-family-head-dialogue/add-family-head-dialogue.component';
import { AddEditFamilyMemberComponent } from '../add-edit-family-member/add-edit-family-member.component';

@Component({
  selector: 'app-family-side-bar',
  templateUrl: './family-side-bar.component.html',
  styleUrls: ['./family-side-bar.component.scss'],
})
export class FamilySideBarComponent implements OnInit {
  @Input('family-membership-id') memberId: String = '';
  familyDetailForm!: FormGroup;
  familyData: any;

  constructor(
    private newDirectoryService: NewDirectoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.familyData = this.newDirectoryService
      .fetchFamilyMembershipById(this.memberId)
      .subscribe((response) => {
        this.familyData = response.body;
        this.populateFamilyDetails();
      });
  }

  populateFamilyDetails() {
    this.familyDetailForm = new FormGroup({
      familyName: new FormControl(this.familyData.familyName),
      phoneNumber: new FormControl(this.familyData.phoneNumber),
      emailId: new FormControl(this.familyData.emailId),
      isActive: new FormControl(this.familyData.active),
    });
  }

  addMemberToFamily() {
    const dialogRef = this.dialog.open(AddEditFamilyMemberComponent, {
      height: 'auto',
      width: '800px',
      data: { title: 'Add', id: this.memberId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
