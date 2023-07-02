import { NewDirectoryService } from 'src/app/services/new-directory.service';
import { AddEditFamilyMemberComponent } from './../add-edit-family-member/add-edit-family-member.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


const ELEMENT_DATA = [
  {no: 1, name: 'Ashutosh', familRole: "Son",contact: "9764956887"},
  {no: 2, name: 'Nikita', familRole: "Daughter",contact: "9764956887"},
  {no: 3, name: 'Sujata', familRole: "Spouse",contact: "9764956887"},
];
@Component({
  selector: 'app-family-member-table',
  templateUrl: './family-member-table.component.html',
  styleUrls: ['./family-member-table.component.scss']
})
export class FamilyMemberTableComponent implements OnInit {

  displayedColumns: string[] = ['no', 'name', 'familRole','contact','actions'];
  dataSource: any;
  firstMemberData : any;
  oldDirectoryData : any;
  constructor(public dialog: MatDialog,
    private newDirectoryService : NewDirectoryService) { }

  ngOnInit(): void {
    this.oldDirectoryData = history.state;
    this.newDirectoryService.fetchFamilyMembers(this.oldDirectoryData.id)
    .subscribe((res : any) => {
        this.dataSource = res.body
        if(this.dataSource.length == 0){
          this.firstMemberData = {
            "lastName" : this.oldDirectoryData.familyName,
            "phoneNumber" : this.oldDirectoryData.phoneNumber,
            "emailId" : this.oldDirectoryData.email,
            "remarks" : this.oldDirectoryData.remarks,
          }
          this.openAddEditMemberDialogue(true,this.firstMemberData);
        }
    })

    
  }

  openAddEditMemberDialogue(isAdd : boolean,data : any){
    let title = isAdd ? "Add" : "Update"
    const dialogRef = this.dialog.open(AddEditFamilyMemberComponent, {
        height: 'auto',
        width: '800px',
      data: {...data, "title" : title},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('The dialog was closed');
    });
  }
}
