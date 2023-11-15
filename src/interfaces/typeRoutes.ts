import type { Component } from "vue"
import type { metaRoute } from "./metaRoute"

export type typeRoutes = {
  path: string,
  name: string,
  component: Component,
  meta?: metaRoute
}