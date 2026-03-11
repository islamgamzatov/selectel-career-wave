import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: number;
  name: string;
  value: number;
  checked: boolean;
}

interface MenuType {
  id: string;
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-menu-page',
  imports: [CommonModule],
  templateUrl: './menu-page.html',
  styleUrl: './menu-page.css'
})
export class MenuPage {
  menuTypes: MenuType[] = [
    { id: 'type1', name: 'Тип 1', isActive: true },
    { id: 'type2', name: 'Тип 2', isActive: false }
  ];

  itemsByType: { [key: string]: MenuItem[] } = {
    'type1': [
      { id: 1, name: 'Item 1', value: 20, checked: false },
      { id: 2, name: 'Item 2', value: 30, checked: false },
      { id: 3, name: 'Item 3', value: 40, checked: true },
      { id: 4, name: 'Item 4', value: 50, checked: false }
    ],
    'type2': [
      { id: 5, name: 'Item A', value: 100, checked: false },
      { id: 6, name: 'Item B', value: 200, checked: false },
      { id: 7, name: 'Item C', value: 300, checked: false }
    ]
  };

  activeTypeId: string = 'type1';

  get currentItems(): MenuItem[] {
    return this.itemsByType[this.activeTypeId] || [];
  }

  get activeTypeName(): string {
    const activeType = this.menuTypes.find(t => t.id === this.activeTypeId);
    return activeType ? activeType.name : '';
  }

  setActiveType(typeId: string): void {
    this.activeTypeId = typeId;
    this.menuTypes.forEach(type => {
      type.isActive = type.id === typeId;
    });
  }

  get selectedCount(): number {
    return this.currentItems.filter(item => item.checked).length;
  }
  get selectedTotal(): number {
    return this.currentItems
      .filter(item => item.checked)
      .reduce((sum, item) => sum + item.value, 0);
  }

  onCheckboxChange(itemId: number): void {
    const item = this.currentItems.find(i => i.id === itemId);
    if (item) {
      item.checked = !item.checked;
    }
  }
}