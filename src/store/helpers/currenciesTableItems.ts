import type { typeHeaderItems } from "@/interfaces/headerItems";

export const tableHeader: typeHeaderItems[] = [
  { info: 'NOMBRE' },
  { info: 'ABREVIATURA' },
  { info: 'SIMBOLO' },
  { info: 'VALOR DE CAMBIO(RULETA)' },
  { info: 'VALOR DE CAMBIO(OTROS JUEGO)' },
  { info: 'ACTUALIZACIÓN AUTOMATICA' },
  { info: 'DISPONIBLE' },
  { info: 'ULTIMA ACTUALIZACION' },
  { info: 'ACCIONES', hidden: true }
]