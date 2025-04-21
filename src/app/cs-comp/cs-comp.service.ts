// 使用字典类型定义导航栏层级关系
// cs-comp.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsCompService {
  constructor() {}

  getMenuConfig(key: string): { path: string; label: string }[] {
    const menus: Record<string, { path: string; label: string }[]> = {
      introduction: [
        { path: 'founder', label: '创始人' },
        { path: 'intro', label: '简介' },
        { path: 'direction', label: '研究方向' },
        { path: 'projects', label: '承担项目' },
        { path: 'conditions', label: '研究条件' }
      ],
      members: [
        { path: 'all', label: '研究人员' },
        { path: 'phd', label: '博士研究生' },
        { path: 'master', label: '硕士研究生' },
        { path: 'alumni', label: '往届成员' }
      ],
      results: [
        { path: 'papers', label: '文章' },
        { path: 'patents', label: '专利' },
        { path: 'software', label: '软件著作权' },
        { path: 'honors', label: '荣誉' }
      ],
      construction: [
        { path: 'news', label: '新闻' },
        { path: 'academic', label: '学术动态' },
        { path: 'meetings', label: '会议通知' },
        { path: 'lab-apply', label: '实验室使用申请' }
      ],
      join: [
        { path: 'faculty', label: '教师' },
        { path: 'postgraduate', label: '研究生' },
        { path: 'assistant', label: '本科生实验助理' }
      ]
      // 如果需要添加更多模块，可以继续扩展菜单配置
    };

    // 如果菜单中没有这个模块，则返回空数组
    return menus[key] || [];
  }
}
