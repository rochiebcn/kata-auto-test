import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormValidationComponent } from './features/form-validation/form-validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';
import { GitHubApiService } from './services/git-hub-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GitHubSearcherComponent } from './features/git-hub-searcher/git-hub-searcher.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatSelectModule,
        MatInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        MatButtonModule,
        MatAutocompleteModule,
        HttpClientModule,
        MatTabsModule,
        MatCardModule,
        MatGridListModule,
        MatDividerModule
      ],
      providers: [GitHubApiService, HttpClient],
      declarations: [
        AppComponent,
        FormValidationComponent,
        GitHubSearcherComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'KataAutoTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('KataAutoTest');
  });

});
