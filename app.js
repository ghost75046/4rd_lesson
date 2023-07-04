const heading = document.getElementById('hello')
console.dir(heading)

const heading2 = document.getElementsByTagName('h2')


setTimeout( ()=> {
    addStylesTo(heading)
}, 1500)

function addStylesTo(node){
    heading.textContent = 'Changed from JavaScript!'

    heading.style.color = 'green'

    heading.style.textAlign = 'center'

    heading.style.backgroundColor = 'purple'

    heading.style.padding = '2rem'
}