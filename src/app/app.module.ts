import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormValidationComponent } from './features/form-validation/form-validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatSelectModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GitHubSearcherComponent } from './features/git-hub-searcher/git-hub-searcher.component';
import { GitHubApiService } from './services/git-hub-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    GitHubSearcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
