import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: any;

  constructor(
    private newsService: NewsService,
    private router: Router) {}

  ngOnInit() {
    this.newsService
    .getData('top-headlines?country=us&category=business')
    .subscribe(data => {
      this.items = data;
    });
  }

  openNews(article) {
    this.newsService.currentNews = article;
    this.router.navigate(['/details']);
  }
}
