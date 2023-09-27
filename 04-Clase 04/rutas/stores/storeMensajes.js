import { defineStore } from 'pinia'

export const useStoreMensajes = defineStore('mensajes', {
    state: () => (
        { 
            mensaje: 'Este es el mensaje predefinido', 
            contador : 0
        }),
        actions: {
            calcular(valor) {
              this.contador = this.contador + valor
            },
          },

})