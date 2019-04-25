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
        expect(users.length)
          .toBe(2);
        expect(users)
          .toEqual(dummyUsers);
      });

      const req = httpMock.expectOne(`${service.API_URL}/users`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyUsers);
    });
  });

  describe('#search', () => {
    const dummyParams = new HttpParams().set('q', 'rochiebcn');

    it('should throw an error if trying to search for not supported `what`', () => {
      service.search('unknown', dummyParams).subscribe(
        () => {},
        err => {
          expect(err).toBe(`Searching for unknown is not supported. The available types are: ${service.WHAT.join(', ')}.`);
        }
      );

      httpMock.expectNone(`${service.API_URL}/search/users?q=rochiebcn`);
    });

    it('should return an Observable<SearchResults>', () => {
      service.search('users', dummyParams).subscribe(
        result => {
          expect(result.items[0]).toEqual({login: 'rochiebcn'});
          expect(result.total_count).toBe(1);
        });

      const req = httpMock.expectOne(`${service.API_URL}/search/users?q=rochiebcn`);
      expect(req.request.url).toBe(`${service.API_URL}/search/users`);
      expect(req.request.params).toEqual(dummyParams);

      req.flush({
        incomplete_results: false,
        items: [{
          login: 'rochiebcn'
        }],
        total_count: 1
      });
    });
  });

});
