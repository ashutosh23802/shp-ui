import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewDirectoryService {
  private fetchAreasUrl = 'http://localhost:8082/areas';
  private fetchFamilyMembersUrl =
    'http://localhost:8082/family?familyMembershipId=';
  private registerUserUrl = 'http://localhost:8082/registration';
  private registerDetailrUrl = 'http://localhost:8082/registrationDetail/';
  private memberUrl = 'http://localhost:8082/member';
  private familyRolesListUrl = 'http://localhost:8082/familyRoles';
  private memberRolesListUrl = 'http://localhost:8082/memberRoles';
  private maritalStatusListUrl = 'http://localhost:8082/maritalStatus';
  private educationLevelListUrl = 'http://localhost:8082/educationLevels';
  private jobCategoryListUrl = 'http://localhost:8082/jobCategories';

  constructor(private http: HttpClient) {}

  getAreaList() {
    return this.http.get(this.fetchAreasUrl, { observe: 'response' });
  }

  registerUser(formData: any) {
    return this.http.post(this.registerUserUrl, formData, {
      observe: 'response',
    });
  }

  fetchFamilyMembership(searchString: String) {
    return this.http.get(
      this.registerUserUrl + '?searchString=' + searchString,
      {
        observe: 'response',
      }
    );
  }

  fetchFamilyMembershipById(membershipId: String) {
    return this.http.get(this.registerUserUrl + '/' + membershipId, {
      observe: 'response',
    });
  }

  fetchFamilyMembers(id: String) {
    return this.http.get(this.fetchFamilyMembersUrl + id, {
      observe: 'response',
    });
  }

  fetchRolesAsFamilyMember(membershipId: String) {
    return this.http.get(this.familyRolesListUrl + '/' + membershipId, {
      observe: 'response',
    });
  }

  fetchRolesAsMember(membershipId: String) {
    return this.http.get(this.memberRolesListUrl + '/' + +membershipId, {
      observe: 'response',
    });
  }

  addNewMember(formData: any) {
    return this.http.post(this.memberUrl, formData, { observe: 'response' });
  }

  getFamilyRoleList() {
    return this.http.get(this.familyRolesListUrl, { observe: 'response' });
  }

  getMemberRoleList() {
    return this.http.get(this.memberRolesListUrl, { observe: 'response' });
  }

  getMaritalStatusList() {
    return this.http.get(this.maritalStatusListUrl, { observe: 'response' });
  }

  getEducationLevelList() {
    return this.http.get(this.educationLevelListUrl, { observe: 'response' });
  }

  getJobCategoryList() {
    return this.http.get(this.jobCategoryListUrl, { observe: 'response' });
  }

  fetchRegistrationDetail(memberId: String) {
    return this.http.get(this.registerDetailrUrl + memberId, {
      observe: 'response',
    });
  }

  fetchBasicMemberDetail(memberId: String) {
    return this.http.get(this.memberUrl + memberId, {
      observe: 'response',
    });
  }
}
