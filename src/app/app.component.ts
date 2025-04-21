import { Component } from '@angular/core';
import { CsHeaderComponent } from './cs-comp/cs-header/cs-header.component';
import { CsFooterComponent } from './cs-comp/cs-footer/cs-footer.component';
import { CsRouterPathComponent } from './cs-comp/cs-router-path/cs-router-path.component';
import { CsLayoutWithSidebarComponent } from './cs-comp/cs-layout-with-sidebar/cs-layout-with-sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CsHeaderComponent, CsFooterComponent, CsRouterPathComponent, CsLayoutWithSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'INAT-ui';
}
