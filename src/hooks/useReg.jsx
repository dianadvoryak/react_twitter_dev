import React from 'react'

export const useReg = (name) => {

  return [name.split(" ").reverse()[0].toLowerCase()]
}