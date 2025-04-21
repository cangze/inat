import { Routes } from '@angular/router';
import { CsLayoutWithSidebarComponent } from './cs-comp/cs-layout-with-sidebar/cs-layout-with-sidebar.component';
import { CsErrorComponent } from './cs-comp/cs-error/cs-error.component';
import { CsMainComponent } from './cs-comp/cs-main/cs-main.component';
// ... 其他组件导入略

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: CsMainComponent, data: { breadcrumb: '首页' } }, 
    {
      path: 'introduction',
      component: CsLayoutWithSidebarComponent,
      data: { breadcrumb: '课题组简介' },
      children: [
        { path: '', redirectTo: 'founder', pathMatch: 'full' }, // 👈 默认跳转到 founder
        { path: 'founder', component: CsErrorComponent, data: { breadcrumb: '创始人' } },
        { path: 'intro', component: CsErrorComponent, data: { breadcrumb: '简介' } },
        { path: 'direction', component: CsErrorComponent, data: { breadcrumb: '研究方向' } },
        { path: 'projects', component: CsErrorComponent, data: { breadcrumb: '承担项目' } },
        { path: 'conditions', component: CsErrorComponent, data: { breadcrumb: '研究条件' } }
      ]
    },
    {
      path: 'members',
      data: { breadcrumb: '研究人员' },
      component: CsLayoutWithSidebarComponent,
      children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' }, // 👈 默认跳转
        { path: 'all', component: CsErrorComponent, data: { breadcrumb: '研究人员' } },
        { path: 'phd', component: CsErrorComponent, data: { breadcrumb: '博士研究生' } },
        { path: 'master', component: CsErrorComponent, data: { breadcrumb: '硕士研究生' } },
        { path: 'alumni', component: CsErrorComponent, data: { breadcrumb: '往届成员' } }
      ]
    },
    {
      path: 'results',
      data: { breadcrumb: '研究成果' },
      component: CsLayoutWithSidebarComponent,
      children: [
        { path: '', redirectTo: 'papers', pathMatch: 'full' },
        { path: 'papers', component: CsErrorComponent, data: { breadcrumb: '文章' } },
        { path: 'patents', component: CsErrorComponent, data: { breadcrumb: '专利' } },
        { path: 'software', component: CsErrorComponent, data: { breadcrumb: '软件著作权' } },
        { path: 'honors', component: CsErrorComponent, data: { breadcrumb: '荣誉' } }
      ]
    },
    {
      path: 'construction',
      data: { breadcrumb: '课题组建设' },
      component: CsLayoutWithSidebarComponent,
      children: [
        { path: '', redirectTo: 'news', pathMatch: 'full' },
        { path: 'news', component: CsErrorComponent, data: { breadcrumb: '新闻' } },
        { path: 'academic', component: CsErrorComponent, data: { breadcrumb: '学术动态' } },
        { path: 'meetings', component: CsErrorComponent, data: { breadcrumb: '会议通知' } },
        { path: 'lab-apply', component: CsErrorComponent, data: { breadcrumb: '实验室使用申请' } }
      ]
    },
    {
      path: 'join',
      data: { breadcrumb: '加入我们' },
      component: CsLayoutWithSidebarComponent,
      children: [
        { path: '', redirectTo: 'faculty', pathMatch: 'full' },
        { path: 'faculty', component: CsErrorComponent, data: { breadcrumb: '教师' } },
        { path: 'postgraduate', component: CsErrorComponent, data: { breadcrumb: '研究生' } },
        { path: 'assistant', component: CsErrorComponent, data: { breadcrumb: '本科生实验助理' } }
      ]
    }
  ];
  
