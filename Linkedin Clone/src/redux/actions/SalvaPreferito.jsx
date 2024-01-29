import React from 'react'

export function SalvaPreferito(preferito) {
    console.log(preferito)
  return {
    type: 'SAVE_FAVORITE',
    payload: preferito
  }
}
