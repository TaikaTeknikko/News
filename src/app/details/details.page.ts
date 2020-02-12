import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  article: any;
  heading: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.article = this.newsService.currentNews;
    console.log(this.article.urlToImage);
    this.heading = this.article.author + " on " + this.article.publishedAt;
  }

}
