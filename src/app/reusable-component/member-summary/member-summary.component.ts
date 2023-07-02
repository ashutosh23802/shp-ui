import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditFamilyMemberComponent } from '../add-edit-family-member/add-edit-family-member.component';

@Component({
  selector: 'app-member-summary',
  templateUrl: './member-summary.component.html',
  styleUrls: ['./member-summary.component.scss']
})
export class MemberSummaryComponent implements OnInit {

  memberSummary:any;
  memberSummaryForm! : FormGroup;
  firstMemberData : any;
  @Output("member-added") memberAdded = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.memberSummary = history.state;
    this.memberSummaryForm = new FormGroup({
      lastName: new FormControl(this.memberSummary.familyName),
      phoneNumber: new FormControl(this.memberSummary.phoneNumber),
      emailId: new FormControl(this.memberSummary.email),
      area: new FormControl(this.memberSummary.area),
      remarks: new FormControl(this.memberSummary.remarks)
    });
  }

  addMember(){
    this.openAddEditMemberDialogue(true,this.memberSummaryForm.value);
  }

  openAddEditMemberDialogue(isAdd : boolean,data : any){
    let title = "Add";
    const dialogRef = this.dialog.open(AddEditFamilyMemberComponent, {
        height: 'auto',
        width: '800px',
      data: {...data, "title" : title},
    });

    dialogRef.beforeClosed().subscribe( res =>{
       let apiSuccess = dialogRef.componentInstance.memberAdded;
       if(apiSuccess){
        this.memberAdded.emit();
       }
    }
  );
  }

}
