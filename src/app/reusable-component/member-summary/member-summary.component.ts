import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditFamilyMemberComponent } from '../add-edit-family-member/add-edit-family-member.component';
import { NewDirectoryService } from 'src/app/services/new-directory.service';

@Component({
  selector: 'app-member-summary',
  templateUrl: './member-summary.component.html',
  styleUrls: ['./member-summary.component.scss'],
})
export class RegistrationDetailComponent implements OnInit {
  @Input('family-membership-id') memberId!: String;
  @Input('title') title!: String;
  registrationDetail: any;
  constructor(public newDirectoryService: NewDirectoryService) {}
  registrationDetailForm!: FormGroup;

  ngOnInit(): void {
    this.newDirectoryService
      .fetchRegistrationDetail(this.memberId)
      .subscribe((response) => {
        this.registrationDetail = response.body;
        this.populatFormData();
      });
  }

  populatFormData() {
    this.registrationDetailForm = new FormGroup({
      dateOfRegistration: new FormControl(
        this.registrationDetail.dateOfRegistration
      ),
      registeredByPriest: new FormControl(
        this.registrationDetail.registeredByPriest
      ),
      officeRepresentative: new FormControl(
        this.registrationDetail.officeRepresentative
      ),
      area: new FormControl(this.registrationDetail.area.name),
      remarks: new FormControl(this.registrationDetail.remarks),
    });
  }
}
