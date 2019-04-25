import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubSearcherComponent } from './git-hub-searcher.component';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GitHubSearcherComponent', () => {
  let component: GitHubSearcherComponent;
  let fixture: ComponentFixture<GitHubSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubSearcherComponent ],
      imports: [MatToolbarModule,
        MatFormFieldModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatSelectModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatAutocompleteModule,
        HttpClientModule,
        MatTabsModule,
        MatCardModule,
        MatGridListModule,
        MatDividerModule,
        BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
