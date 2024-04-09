import { Injectable } from '@angular/core';
import { IssuedDetails } from '../../models/issuedDetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueDetailsService {
  resIssued!: IssuedDetails;
  private getIssued = "http://localhost:5174/api/IssuedDetails/GetIssuedDetails";
  private getIssuedById = "http://localhost:5174/api/IssuedDetails/GetIssuedDetailById?id=";
  private addNewIssued = "http://localhost:5174/api/IssuedDetails/AddIssuedDetail";
  private updateIssued = "http://localhost:5174/api/IssuedDetails/UpdateIssuedDetail?id=";
  private deleteIssued = "http://localhost:5174/api/IssuedDetails/DeleteIssuedDetail?id=";
  constructor(private http: HttpClient) { }

  getIssuedDetails(): Observable<IssuedDetails[]> {
    return this.http.get<IssuedDetails[]>(this.getIssued)
  }

  addIssuedDetails(issued: IssuedDetails): Observable<Object> {
    return this.http.post(`${this.addNewIssued}`, issued);
  }

  getissuedById(issueId: number): Observable<IssuedDetails> {
    return this.http.get<IssuedDetails>(`${this.getIssuedById}${issueId}`);
  }

  updateissued(issueId: number, issue: IssuedDetails): Observable<any> {
    return this.http.put<any>(`${this.updateIssued}${issueId}`, issue);
  }

  deleteissued(issueId: number): Observable<Object> {
    return this.http.delete(`${this.deleteIssued}${issueId}`);
  }
}
