import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'cs-layout-with-sidebar',
  standalone: true,
  templateUrl: './cs-layout-with-sidebar.component.html',
  styleUrls: ['./cs-layout-with-sidebar.component.less'],
  imports: [RouterOutlet,NzGridModule,NzMenuModule,NzIconModule]
})
export class CsLayoutWithSidebarComponent {
  menuItems: any[] = [];
  selectedKey: string = '';
  openKeys: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    // 获取 route 配置中定义的 menuItems
    this.route.data.subscribe(data => {
      this.menuItems = data['menuItems'] || [];
    });

    // 监听路由变化更新当前选中项
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const childRoute = this.route.firstChild;
        if (childRoute && childRoute.snapshot.url.length > 0) {
          this.selectedKey = childRoute.snapshot.url[0].path;
        }
      });
  }
}
