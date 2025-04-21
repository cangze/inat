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
        { path: 'faculty', label: '研究人员' },
        { path: 'phd', label: '博士研究生' },
        { path: 'master', label: '硕士研究生' },
        { path: 'alumni', label: '往届成员' }
      ],
      results: [
        { path: 'papers', label: '文章' },
        { path: 'patents', label: '专利' },
        { path: 'software', label: '软件著作权' },
        { path: 'awards', label: '荣誉' }
      ]
      // 更多模块按需添加
    };
    return menus[key] || [];
  }
}
