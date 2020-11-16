import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  page;

  constructor(private route: ActivatedRoute,
              private contentService: ContentService) { }

  ngOnInit(): void {
    const pageData = this.route.snapshot.data.page;
    this.page = this.contentService.pages[pageData];
  }

}
