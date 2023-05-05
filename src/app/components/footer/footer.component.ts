import { Component, OnInit } from '@angular/core';
import { faYoutube, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faYoutube = faYoutube
  faGithub = faGithub
  faFacebookF = faFacebook

}
