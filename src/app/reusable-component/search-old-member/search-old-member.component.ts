import { AddFamilyHeadDialogueComponent } from './../add-family-head-dialogue/add-family-head-dialogue.component';
import { OldDirectoryService } from './../../services/old-directory.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search-old-member',
  templateUrl: './search-old-member.component.html',
  styleUrls: ['./search-old-member.component.scss']
})
export class SearchOldMemberComponent implements OnInit {

  displayedColumns: string[] = ['sno', 'zone', 'leader', 'head', 'spouse', 'contact', 'children', 'education', 'address', 'actions'];
  dataSource: any;
  searchString: FormControl = new FormControl();

  oldMemberDataForm = new FormGroup({
    sno: new FormControl(''),
    zone: new FormControl(''),
    leader: new FormControl(''),
    head: new FormControl(''),
    spouse: new FormControl(''),
    contact: new FormControl(''),
    children: new FormControl(''),
    education: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private oldDirectoryService: OldDirectoryService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.searchString.valueChanges
      .subscribe(searchString => {
        this.oldDirectoryService.getMatchingOldMembers(searchString)
          .subscribe(
            (res: any) => {
              this.dataSource = res;
              console.log(res);
            }
          )
      })
  }

  openAddFamilyHead(data: any) {
    const dialogRef = this.dialog.open(AddFamilyHeadDialogueComponent, {
      height: 'auto',
      width: '800px',
      data: data,
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
}

}
