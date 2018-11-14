function fetchBooks() {
  //write fetch request to the Game of Thrones API
  fetch('https://anapioficeandfire.com/api/books')
    .then((response) => response.json())
    .then((responseJson) => renderBooks(responseJson))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  for (book of json) {
    
  }
  
  json.forEach(book => {
    if (book.name === 'Game of Thrones') {
      alert('hi')
    } else if (book.name ===  'Clash of Kings') {
       
    }
    
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
