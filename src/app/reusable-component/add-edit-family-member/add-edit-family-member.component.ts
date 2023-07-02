import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewDirectoryService } from 'src/app/services/new-directory.service';

@Component({
  selector: 'app-add-edit-family-member',
  templateUrl: './add-edit-family-member.component.html',
  styleUrls: ['./add-edit-family-member.component.scss']
})
export class AddEditFamilyMemberComponent implements OnInit {

  genderOptions = ["MALE","FEMALE"];
  maritalStatusOptions : any;
  educationLevelOptions : any;
  jobCategoryOptions : any;
  familyRoleOptions : any;
  memberRoleOptions : any;
  memberAdded = false;
  apiMessage = "";
  @Output("member-added-event") memberAddedEvent = new EventEmitter<string>();
  
  familyMemberForm = new FormGroup({
    firstName: new FormControl(this.data.firstName),
    lastName: new FormControl(this.data.lastName),
    dateOfBirth: new FormControl(this.data.dateOfBirth),
    gender: new FormControl(this.data.gender),
    phoneNumber: new FormControl(this.data.phoneNumber),
    emailId: new FormControl(this.data.emailId),
    maritalStatus: new FormControl(this.data.maritalStatus),
    education: new FormControl(this.data.education),
    educationLevel: new FormControl(this.data.educationLevel),
    occupation: new FormControl(this.data.occupation),
    jobCategory: new FormControl(this.data.jobCategory),
    remarks: new FormControl(this.data.remarks),
    roleAsMember: new FormControl(this.data.roleAsMember),
    roleInFamily: new FormControl(this.data.roleInFamily)
  });
  
  constructor(
    public dialogRef: MatDialogRef<AddEditFamilyMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private newDirectoryService : NewDirectoryService
    ) { }

  ngOnInit(): void {
    this.newDirectoryService.getFamilyRoleList().subscribe((res : any) => {
      this.familyRoleOptions = res.body;
      this.newDirectoryService.getMemberRoleList().subscribe((res : any) => {
        this.memberRoleOptions = res.body;
        this.newDirectoryService.getMaritalStatusList().subscribe((res : any) => {
          this.maritalStatusOptions = res.body;
          this.newDirectoryService.getEducationLevelList().subscribe((res : any) => {
            this.educationLevelOptions = res.body;
            this.newDirectoryService.getJobCategoryList().subscribe((res : any) => {
              this.jobCategoryOptions = res.body;
            })
          })
        })
      })
    })
  }

  cancel(): void {
    this.dialogRef.close();
  }

  addUpdateMember(){
    let addMemberObject = this.data.id !== undefined ?  
    { ...this.familyMemberForm.value, 
      "id" : this.data.id,
      "familyMembership" : { "id" :history.state.id}
    } : 
    { ...this.familyMemberForm.value, 
      "familyMembership" : { "id" :history.state.id}
    };
    this.newDirectoryService.addNewMember(addMemberObject)
    .subscribe( (res : any) => {
      this.memberAdded = true;
      console.log(res);
      this.apiMessage = "Member added to family Successfully";
      setTimeout(() => {
        this.dialogRef.close();
      }, 2000);

    });
  }

}
