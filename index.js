const message = document.querySelector('#message')


const addMovie = e => {
    event.preventDefault()
    const inputField = document.querySelector('input');
    
    const movie = document.createElement('li');
    
    movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    
    const movies = document.querySelector('ul')
    movies.appendChild(movie);
    inputField.value = ''
}

const enterBtn = document.querySelector('button');
enterBtn.addEventListener('click', addMovie)

const deleteMovie = e => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    revealMessage()
}

const crossOffMovie = e => {
    event.target.classList.toggle('checked')
    
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} has been removed!`
    } else message.textContent = `${event.target.textContent} been uncrossed!`
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000);
}