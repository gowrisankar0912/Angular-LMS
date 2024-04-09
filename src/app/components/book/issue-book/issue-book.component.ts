import { Component, OnInit } from '@angular/core';
import { IssuedDetails } from '../../../models/issuedDetails';
import { Router } from '@angular/router';
import { IssueDetailsService } from '../../../services/issued-services/issue-details.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrl: './issue-book.component.css'
})
export class IssueBookComponent implements OnInit{
  issueDetails: IssuedDetails = new IssuedDetails();
  constructor(private issuedDetailService: IssueDetailsService, private router: Router){}
  ngOnInit() { }
  onSubmit() {
    console.log(this.issueDetails);
    this.saveIssued();
  }

  saveIssued() {
    this.issuedDetailService.addIssuedDetails(this.issueDetails).subscribe(data => {
      console.log(data);
      this.goToUsersList();
    },
    error => console.log(error));
    this.goToUsersList();
  }

  goToUsersList() {
    this.router.navigate(['displayissuedetails']);
  }
}
