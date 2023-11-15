type subItem = {
  route: string
  name: string
  roles: string[]
  icon: string
  breadCrumbs?: string[]
}

export type typeMenuItems = {
  route: string
  name: string
  roles: string[]
  icon: string,
  breadCrumbs?: string[]
  subMenu?: boolean
  items?: subItem[]
} 