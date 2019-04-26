import { getTestBed, TestBed } from '@angular/core/testing';

import { GitHubApiService } from './git-hub-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';

describe('GitHubApiService', () => {
  let injector: TestBed;
  let service: GitHubApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:   [HttpClientTestingModule],
      providers: [GitHubApiService]
    });

    injector = getTestBed();
    service = injector.get(GitHubApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // do this to make sure that there are no outsanding requests
  });

  it('should be created', () => {
    // const service: GitHubApiService = TestBed.get(GitHubApiService); // Same as getTestBed()
    expect(service).toBeTruthy();
  });


  describe('#getUsers', () => {
    it('should return an Observable<User[]>', () => {
      const dummyUsers = [
        {login: 'John'},
        {login: 'Doe'}
      ];
      service.getUsers().subscribe(users => {
        // TODO expects to check: we have 2 users & this users are the dummy users
      }
      );

      // TODO httpMock expectOne call
      // TODO expect the method type to the API is GET
    });
  });

  describe('#search', () => {
    const dummyParams = new HttpParams().set('q', 'rochiebcn');

    it('should throw an error if trying to search for not supported `what`', () => {
      service.search('unknown', dummyParams).subscribe(
        () => {},
        err => {
          // TODO expect the error that will be retrieve
        }
      );

      // TODO expect no calls to API has been made
    });

    it('should return an Observable<SearchResults>', () => {
      service.search('users', dummyParams).subscribe(
        result => {
          // TODO expect the result of flush
        });

      // TODO expect one call to the API (URL with params)
      // TODO expect request params are the dummy params
      // TODO expect the request url are the API without params
    });
  });

});
