import { Component } from '@angular/core';
import { IssuedDetails } from '../../../models/issuedDetails';
import { IssueDetailsService } from '../../../services/issued-services/issue-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-issue-details',
  templateUrl: './display-issue-details.component.html',
  styleUrl: './display-issue-details.component.css'
})
export class DisplayIssueDetailsComponent {
  issueDetails!: IssuedDetails[];
  // 
  constructor(private issuedetailsService: IssueDetailsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getIssued();
  }

  private getIssued() {
    this.issuedetailsService.getIssuedDetails().subscribe(data =>{
      this.issueDetails = data;
    });
  }


  deleteIssued(issueId: number) {
    this.issuedetailsService.deleteissued(issueId).subscribe( data=> {
      this.getIssued();
    });
    this.router.navigateByUrl('displayissuedetails');
  }
}
