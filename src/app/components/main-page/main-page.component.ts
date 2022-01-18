
import { Component } from '@angular/core';
import { faCertificate, faCopy, faBookOpen, faLaughBeam, faChartBar } from '@fortawesome/free-solid-svg-icons';

declare var $: any;
@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  contractAddress: string = "0x2b6b1e7a489661cafa70333b2bfe00d51d373de2";
  bscScanAddress: string = "https://bscscan.com/token/0x2b6b1e7a489661cafa70333b2bfe00d51d373de2";
  pancakeSwapAddress: string = "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x2b6b1e7a489661cafa70333b2bfe00d51d373de2";
  faCertificate = faCertificate; 
  faCopy = faCopy; 
  faChartBar = faChartBar;
  faBookOpen = faBookOpen;
  clickCopy() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.contractAddress;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
