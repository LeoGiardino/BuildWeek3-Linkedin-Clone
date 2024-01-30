import React from 'react'

export function SalvaPreferito(preferito) {
    //console.log(preferito)
  return {
    type: 'SAVE_FAVORITE',
    payload: preferito
  }
}

export function RemovePreferito(preferito) {
  console.log(preferito)
return {
  type: 'REMOVE_FAVORITE',
  payload: preferito
}
}
