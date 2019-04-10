const addBtnEl = document.querySelector('#new-toy-btn')
const toyFormContainerEl = document.querySelector('.container')
const toyFormEl = document.querySelector('.add-toy-form')

const toyCollectionEl = document.querySelector('#toy-collection')

const toyNameInput = document.querySelector('input[name=name]')
const toyImageInput = document.querySelector('input[name=image]')

let addToy = false

const apiURL = 'http://localhost:3000/toys'

addBtnEl.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyFormContainerEl.style.display = 'block'
    // submit listener here
  } else {
    toyFormContainerEl.style.display = 'none'
  }
})
