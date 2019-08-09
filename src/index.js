const addBtnEl = document.querySelector('#new-toy-btn')
// const toySubmit = document.querySelector('#submit')
const toyFormContainerEl = document.querySelector('.container')
const toyFormEl = document.querySelector('.add-toy-form')
const toyCollectionEl = document.querySelector('#toy-collection')

const toyNameInput = document.querySelector('input[name=name]')
const toyImageInput = document.querySelector('input[name=image]')

let addToy = false


const apiURL = 'http://localhost:3000/toys'


const getToys =()=> {
 return fetch(apiURL)
    .then(res=> res.json())
    .then(data=> {
  console.log(data)
  data.forEach(d=> {
    // console.log(d.image)
    createToy(d)
    })
  })
}


addBtnEl.addEventListener('click', () => {
 
  addToy = !addToy
  if (addToy) {
    toyFormContainerEl.style.display = 'block'
  } else {
    toyFormContainerEl.style.display = 'none'
  }
})
  // debugger

toyFormEl.addEventListener('submit', (e)=> {
  e.preventDefault()
  console.log(e.target.value)

// debugger
fetch("http://localhost:3000/toys", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name":toyNameInput.value,
     "image":toyImageInput.value,
     "likes": 0
  })
})
.then(res=> res.json())
.then(d=> {
createToy(d)
e.target.reset()

// toyCollectionEl.append((toy)))
})
})










createToy =(d)=> {
  const div = document.createElement('div')
    div.className="card"
  
    let name= document.createElement('h2')
       name.innerText= d.name

      let Likes = document.createElement('p')
      Likes.innerHTML= `${d.likes}`

    
      let button = document.createElement('button')
      button.className="like-btn"
      button.innerText="Like"


      button.addEventListener('click', ()=> {
        console.log('I was clicked')

        // function mylikes=()=>{
        //   numberOfLikes += 1
        // }
        // let numberOfLikes = parseInt(Likes.textContent.split(' ')[0])
        

      fetch(`http://localhost:3000/toys/${d.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           "likes": d.likes+=1
        })
      })
      .then(res=> res.json())
      .then(d=> {
        Likes.innerHTML= `${d.likes}`
      })
      })
      
    
      let image1= document.createElement('img')
      image1.className="toy-avatar"
      image1.src= d.image

      image1.style.width="200px"
      image1.style.height="200px"

      div.append(name, Likes, image1, button)
      toyCollectionEl.append(div)
// It removes the Image to the page but not in the data base.
      image1.addEventListener('click', function(){
      image1.parentElement.remove()
      })
}



getToys()
