import { defineStore } from "pinia";
import { menuItems } from "../helpers/menuItems";
import { useUserStore } from "./user";
import { useRoute } from "vue-router";
import type { metaRoute } from "@/interfaces/metaRoute";

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
        if (item.subMenu && item.items) {
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
    },
    getBreadCrumbs(): any[] | undefined {
      const { name, meta } = useRoute();
      const { subMenu, parent } = meta as metaRoute;
      let breadCrumbs: any[] | undefined = []

      for (const item of this.items) {

        if (subMenu) {
          const parents = item.route === parent ? item : null;
          if (!parents) continue
          const subItem = parents.items?.find(t => t.route === name);
          if (subItem) {
            breadCrumbs = subItem.breadCrumbs
          }
        } else {
          if (item.route === name) {
            breadCrumbs = item.breadCrumbs
          }
        }

      }

      return breadCrumbs
    }
  }
})

export { useMenuStore }