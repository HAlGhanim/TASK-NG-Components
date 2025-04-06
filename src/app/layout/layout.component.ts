import { ContentComponent } from '../content/content.component';
import { SiderbarComponent } from '../siderbar/siderbar.component';
import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SiderbarComponent, ContentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
