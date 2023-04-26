import { AfterViewInit, Component } from '@angular/core';

declare var M:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements AfterViewInit {
  title = 'my-app';

  ngAfterViewInit(): void {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }

}
