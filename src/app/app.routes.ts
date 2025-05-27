import { Routes } from '@angular/router';
import { CsLayoutWithSidebarComponent } from './cs-comp/cs-layout-with-sidebar/cs-layout-with-sidebar.component';
import { CsMainComponent } from './cs-comp/cs-main/cs-main.component';
import { CsFrameComponent } from './cs-comp/cs-frame/cs-frame.component';
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
        { path: 'founder', component: CsFrameComponent, data: { breadcrumb: '创始人',src : 'founder' } },
        { path: 'intro', component: CsFrameComponent, data: { breadcrumb: '简介' } },
        { path: 'direction', component: CsFrameComponent, data: { breadcrumb: '研究方向' } },
        { path: 'projects', component: CsFrameComponent, data: { breadcrumb: '承担项目' } },
        { path: 'conditions', component: CsFrameComponent, data: { breadcrumb: '研究条件' } }
      ]
    },
    {
      path: 'members',
      data: { breadcrumb: '研究人员' },
      component: CsLayoutWithSidebarComponent,
      children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' }, // 👈 默认跳转
        { path: 'all', component: CsFrameComponent, data: { breadcrumb: '研究人员' } },
        { path: 'phd', component: CsFrameComponent, data: { breadcrumb: '博士研究生' } },
        { path: 'master', component: CsFrameComponent, data: { breadcrumb: '硕士研究生' } },
        { path: 'alumni', component: CsFrameComponent, data: { breadcrumb: '往届成员' } }
      ]
    },
    {
      path: 'results',
      data: { breadcrumb: '研究成果' },
      component: CsLayoutWithSidebarComponent,
      children: [
        { path: '', redirectTo: 'papers', pathMatch: 'full' },
        { path: 'papers', component: CsFrameComponent, data: { breadcrumb: '文章' } },
        { path: 'patents', component: CsFrameComponent, data: { breadcrumb: '专利' } },
        { path: 'software', component: CsFrameComponent, data: { breadcrumb: '软件著作权' } },
        { path: 'honors', component: CsFrameComponent, data: { breadcrumb: '荣誉' } }
      ]
    },
    {
      path: 'construction',
      data: { breadcrumb: '课题组建设' },
      component: CsLayoutWithSidebarComponent,
      children: [
        { path: '', redirectTo: 'news', pathMatch: 'full' },
        { path: 'news', component: CsFrameComponent, data: { breadcrumb: '新闻' } },
        { path: 'academic', component: CsFrameComponent, data: { breadcrumb: '学术动态' } },
        { path: 'meetings', component: CsFrameComponent, data: { breadcrumb: '会议通知' } },
        { path: 'lab-apply', component: CsFrameComponent, data: { breadcrumb: '实验室使用申请' } }
      ]
    },
    {
      path: 'join',
      data: { breadcrumb: '加入我们' },
      component: CsLayoutWithSidebarComponent,
      children: [
        { path: '', redirectTo: 'faculty', pathMatch: 'full' },
        { path: 'faculty', component: CsFrameComponent, data: { breadcrumb: '教师' } },
        { path: 'postgraduate', component: CsFrameComponent, data: { breadcrumb: '研究生' } },
        { path: 'assistant', component: CsFrameComponent, data: { breadcrumb: '本科生实验助理' } }
      ]
    }
  ];
  
