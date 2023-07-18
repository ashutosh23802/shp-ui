import { NewDirectoryService } from 'src/app/services/new-directory.service';
import { AddEditFamilyMemberComponent } from './../add-edit-family-member/add-edit-family-member.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-family-member-table',
  templateUrl: './family-member-table.component.html',
  styleUrls: ['./family-member-table.component.scss'],
})
export class FamilyMemberTableComponent implements OnInit {
  @Input('family-membership-id') memberId!: String;
  @Output('member-selected') memberDataEvent = new EventEmitter<any>();
  selectedFamilyMember: FormControl = new FormControl();
  displayedColumns: string[] = ['no', 'name'];
  dataSource: any;
  constructor(private newDirectoryService: NewDirectoryService) {}

  ngOnInit(): void {
    this.selectedFamilyMember.valueChanges.subscribe((value) => {
      console.log(this.dataSource);
      console.log(value);
      this.memberDataEvent.emit(
        this.dataSource.filter((member: any) => member.id == value)
      );
    });
    this.newDirectoryService
      .fetchFamilyMembers(this.memberId)
      .subscribe((res: any) => {
        this.dataSource = res.body;
      });
  }
}
