import { FormControl, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewDirectoryService } from 'src/app/services/new-directory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-family-head-dialogue',
  templateUrl: './add-family-head-dialogue.component.html',
  styleUrls: ['./add-family-head-dialogue.component.scss']
})
export class AddFamilyHeadDialogueComponent implements OnInit {

  familyHeadForm!: FormGroup;
  areaOptions : any;
  selectedArea : any;
  apiMessage = "";

  constructor(public dialogRef: MatDialogRef<AddFamilyHeadDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public newDirectoryService : NewDirectoryService,
    private router: Router) { }

  ngOnInit(): void {

    this.newDirectoryService.getAreaList().subscribe((res : any) => {
      this.areaOptions = res.body;
      this.selectedArea = this.areaOptions.filter((area : any) => area.name === this.data.zone);
    })
  
    this.familyHeadForm = new FormGroup({
      familyName: new FormControl(this.data.head),
      officeRepresentative: new FormControl(''),
      phoneNumber: new FormControl(this.data.contact),
      emailId: new FormControl(''),
      memberRemark: new FormControl(''),
      registrationRemark: new FormControl(''),
      dateOfRegistration: new FormControl(''),
      registeredByPriest: new FormControl(''),
      area: new FormControl(this.selectedArea),
      leader: new FormControl(this.data.leader),
      spouse: new FormControl(this.data.spouse),
      children: new FormControl(this.data.children),
      education: new FormControl(this.data.education),
      address: new FormControl(this.data.address)
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  registerUser(){
    console.log(this.familyHeadForm.value);
    this.newDirectoryService.registerUser(this.familyHeadForm.value).subscribe((res : any) => {
      this.apiMessage = "Family Successfully enrolled, redirecting add members page now";
      setTimeout(() => {
        this.dialogRef.close();
        let selectedArea = this.areaOptions.filter((area : any) => area.id === this.familyHeadForm.value.area.id);
        this.router.navigateByUrl("/update",{state : {...res.body,area : selectedArea[0].name}});
      }, 2000);
    })
  }
}
