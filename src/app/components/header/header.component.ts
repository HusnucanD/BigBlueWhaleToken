
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Component } from '@angular/core';
import { faBars, faGamepad, faCoins } from '@fortawesome/free-solid-svg-icons';
import { PageScrollService } from 'ngx-page-scroll-core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faBars = faBars;
  faGamepad = faGamepad;
  faCoins = faCoins;
  isMenuCollapsed = true;
  metricsClicked = false;
  questionsClicked = false;
  communityClicked = false;
  pancakeSwapAddress: string = 
    "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x2b6b1e7a489661cafa70333b2bfe00d51d373de2";
  constructor(private router: Router,
    private pageScrollService: PageScrollService, 
    @Inject(DOCUMENT) private document: any) {
    //
  }
  brand_cliked() {
    if (this.router.url == "/games") {
      this.getMainPage();
    }
    else {
      this.metricsClicked = false;
      this.questionsClicked = false;
      this.communityClicked = false;
      this.isMenuCollapsed = true;
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: '#entry',
      }); 
    }    
  }
  metrics_cliked() {
    if (this.router.url == "/games") {
      this.getMainPage();
    }
    else {
      this.metricsClicked = true;
      this.questionsClicked = false;
      this.communityClicked = false;
      this.isMenuCollapsed = true;
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: '#metrics',
      });
    }        
  } 
  questions_cliked() {
    if (this.router.url == "/games") {
      this.getMainPage();
    }
    else {
      this.metricsClicked = false;
      this.questionsClicked = true;
      this.communityClicked = false;
      this.isMenuCollapsed = true;
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: '#questions',
      }); 
    }     
  }
  community_clicked() {
    if (this.router.url == "/games") {
      this.getMainPage();
    }
    else {
      this.metricsClicked = false;
      this.questionsClicked = false;
      this.communityClicked = true;
      this.isMenuCollapsed = true;
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: '#community',
      });
    }      
  }
  play_clicked() {
    this.metricsClicked = false;
    this.questionsClicked = false;
    this.communityClicked = false;
    this.isMenuCollapsed = true;
    this.router.navigate(['/games']);
  }
  getMainPage() {
    this.router.navigate(['/']);
    this.metricsClicked = false;
    this.questionsClicked = false;
    this.communityClicked = false;
    this.isMenuCollapsed = true;
  }
}
