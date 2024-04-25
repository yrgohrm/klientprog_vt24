import { camelCase } from 'lodash/fp/string'
import './style1.css'

window.addEventListener('load', () => {
    let div = document.getElementById('app')
    div.innerText = camelCase("hejsan världen")
})
