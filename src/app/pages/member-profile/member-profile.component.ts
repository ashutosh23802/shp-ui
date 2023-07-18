import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FamilyMemberTableComponent } from 'src/app/reusable-component/family-member-table/family-member-table.component';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss'],
})
export class MemberProfileComponent implements OnInit {
  selectedMemberData: any;
  memberId: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.memberId = params.get('memberId');
    });
  }

  onMemberSelected(memberData: any) {
    this.selectedMemberData = memberData[0];
    console.log(memberData);
  }
}
