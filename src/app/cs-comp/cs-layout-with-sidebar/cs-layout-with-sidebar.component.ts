import { CommonModule } from "@angular/common";
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from "@angular/router";
import { filter } from "rxjs";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CsCompService } from "../cs-comp.service";
import { Component, OnInit } from "@angular/core";
import { NzGridModule } from 'ng-zorro-antd/grid';
@Component({
  selector: 'cs-layout-with-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule,NzIconModule,NzGridModule],
  templateUrl: './cs-layout-with-sidebar.component.html',
  styleUrls: ['./cs-layout-with-sidebar.component.less']
})
export class CsLayoutWithSidebarComponent implements OnInit {
  menuList: { path: string; label: string }[] = [];
  menuTitle = '';
  baseRouteKey = '';
  currentPath = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private compService: CsCompService
  ) {}

  ngOnInit(): void {
    this.baseRouteKey = this.route.snapshot.routeConfig?.path || '';
    this.menuList = this.compService.getMenuConfig(this.baseRouteKey);
    this.menuTitle = this.route.snapshot.data['breadcrumb'] || '';

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const segments = this.router.url.split('/');
        this.currentPath = segments[segments.length - 1];
      });
    console.log(this.currentPath);
  }
  ngAfterViewChecked() {
    // 更新当前路径，当组件视图更新时（比如点击一级菜单）
    if (this.currentPath === '') {
      const segments = this.router.url.split('/');
      this.currentPath = segments[segments.length - 1];
    }
  }

  navigateTo(subPath: string) {
    this.router.navigate([subPath], { relativeTo: this.route });
  }
}
