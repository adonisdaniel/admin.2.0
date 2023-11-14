import { defineStore } from "pinia";
import { menuItems } from "../helpers/menuItems";
import { useUserStore } from "./user";

const useMenuStore = defineStore('menu', {
  state: () => ({
    items: menuItems
  }),
  getters: {
    getMenuItems(): any[] {
      const userStore = useUserStore();
      const role = userStore.getUserRole;

      const menuItems: any[] = []

      for (const item of this.items) {
        if (item.subMenu) {
          const target = item.items.filter(subItems => subItems.roles.includes(role));
          const multiple = { ...item, items: target };
          menuItems.push(multiple);
        } else {
          if (item.roles.includes(role)) {
            menuItems.push(item)
          }
        }
      }

      return menuItems
    }
  }
})

export { useMenuStore }