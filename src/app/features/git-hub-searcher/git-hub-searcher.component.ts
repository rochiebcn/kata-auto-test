import { Component, OnInit } from '@angular/core';
import { GitHubApiService, GitHubUser, SearchResults } from '../../services/git-hub-api.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-git-hub-searcher',
  templateUrl: './git-hub-searcher.component.html',
  styleUrls: ['./git-hub-searcher.component.scss']
})
export class GitHubSearcherComponent implements OnInit {

  usersList;
  types = this.gitHubService.WHAT;
  public what: string;
  public value: string;
  public searchResults: SearchResults<any>;

  constructor(private gitHubService: GitHubApiService) { }

  ngOnInit() {
  }

  public getAllUsers() {
    this.gitHubService.getUsers().subscribe(users =>
      this.usersList = users);
  }

  public reset() {
    this.usersList = null;
    this.searchResults = null;
  }

  public performSearch() {
    const params = new HttpParams().set('q', this.value);
    this.gitHubService.search(this.what, params).subscribe(results =>
      this.searchResults = results);
  }

  public stringify(result: any) {
    return JSON.stringify(result).split(',').join('<p>');
  }
}
