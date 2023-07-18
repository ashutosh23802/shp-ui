import { NewDirectoryService } from 'src/app/services/new-directory.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-member-complete-details',
  templateUrl: './member-complete-details.component.html',
  styleUrls: ['./member-complete-details.component.scss'],
})
export class MemberCompleteDetailsComponent implements OnInit {
  @Input('complete-member-detail') memberDetails: any;
  memberDetail!: FormGroup;
  memberId!: String;
  familyRoles: Array<String> = new Array();
  memberRoles: Array<String> = new Array();

  constructor(private newDirectoryService: NewDirectoryService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: any) {
    if (this.memberDetails != undefined) {
      this.memberId = this.memberDetails.id;
      forkJoin([
        this.newDirectoryService.fetchRolesAsFamilyMember(this.memberId),
        this.newDirectoryService.fetchRolesAsMember(this.memberId),
      ]).subscribe((responses: any) => {
        responses[0].body.forEach((role: any) => {
          this.familyRoles.push(role.roleInFamily.name);
        });
        responses[1].body.forEach((role: any) => {
          this.memberRoles.push(role.roleAsMember.name);
        });
        console.log(responses[0]);
        console.log(responses[1]);
        this.populateMemberDetails();
      });
    }
  }

  populateMemberDetails() {
    this.memberDetail = new FormGroup({
      firstName: new FormControl(this.memberDetails.firstName),
      lastName: new FormControl(this.memberDetails.lastName),
      dateOfBirth: new FormControl(this.memberDetails.dateOfBirth),
      gender: new FormControl(this.memberDetails.gender),
      phoneNumber: new FormControl(this.memberDetails.phoneNumber),
      emailId: new FormControl(this.memberDetails.emailId),
      maritalStatus: new FormControl(this.memberDetails.maritalStatus.name),
      education: new FormControl(this.memberDetails.education),
      educationLevel: new FormControl(this.memberDetails.educationLevel.name),
      occupation: new FormControl(this.memberDetails.occupation),
      jobCategory: new FormControl(this.memberDetails.jobCategory.name),
      remarks: new FormControl(this.memberDetails.remarks),
      roleAsMember: new FormControl(this.memberRoles.toString()),
      roleInFamily: new FormControl(this.familyRoles.toString()),
    });
  }
}
