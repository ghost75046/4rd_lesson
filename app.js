const heading = document.getElementById('hello')
//const heading2 = document.getElementsByTagName('h2')[0]
//const heading2 = document.getElementsByClassName('h2-class')
//const heading2 = document.querySelector('.h2-class')
//const heading2 = document.querySelector('#hello')
const heading2 = document.querySelector('h2')


console.dir(heading2)

//const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading3 = h2List[h2List.length-1]
console.log(heading3)

setTimeout( ()=> {
    addStylesTo(heading, 'Java Script')
}, 1500)


setTimeout( ()=> {
    addStylesTo(heading2, 'Практикуйся', 'blue')
}, 4500)
setTimeout( ()=> {
    addStylesTo(heading3, 'и всё получится!', 'yellow', '2rem')
}, 3000)

function addStylesTo(node,text, color = 'green', fontSize){
   node.textContent = 'Changed from JavaScript!'

    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'purple'
    node.style.padding = '2rem'
    //falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick =() =>{
    console.log('click')
    if ( heading.style.color === 'green'){
        heading.style.color = 'blue'
        heading.style.backgroundColor = '#fff'
    }else{
        heading.style.color = 'green'
        heading.style.backgroundColor = '#000'
    }

}



heading2.addEventListener('dblclick', listener () => {
    if ( heading2.style.color === 'green'){
        heading2.style.color = 'blue'
        heading2.style.backgroundColor = '#fff'
    }else{
        heading2.style.color = 'green'
        heading2.style.backgroundColor = '#000'
    }
})