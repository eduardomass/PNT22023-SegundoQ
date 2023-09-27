import { defineStore } from 'pinia'

export const useStoreBitacora = defineStore('bitacora', {
    state: () => ({ acciones: [] }),
    getters: {
      getAcciones(state) {
        return state.acciones
      }
    },
    persist: true,
    actions: {
      agregarAccion(accion) {
        this.acciones.push(accion)
      },
    },
})