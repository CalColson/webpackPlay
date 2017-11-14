import _ from 'lodash'
import './style.css'
import image from '../assets/30a.jpeg'
import printMe from './print'

function component() {
  let element = document.createElement('div')
  let btn = document.createElement('button')

  element.innerHTML = _.join(['Hello', 'Calbot', 'webpack'], ' CHECKIT ')

  btn.innerHTML = 'Smash the button and check the console logs...'
  btn.onclick = printMe

  element.classList.add('hello')

  const myImage = new Image()
  myImage.src = image

  element.appendChild(myImage)
  element.appendChild(btn)

  return element
}

let element = component()
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./index.js', () => {
    console.log('Accepting the updated index modulular thing')
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated print modulular thing')
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}
