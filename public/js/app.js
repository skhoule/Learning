const weatherform = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''


    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            console.log(data);

            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
                return
            }
            messageOne.textContent = data.location;
            messageTwo.textContent = `It's ${data.forecast.temperature}. ${data.forecast.summary}`;
        })
    })
})

// console.log('Message');
// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// })