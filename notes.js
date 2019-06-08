const data = JSON.parse(this.responseText)
console.log(data)

var ul = document.createElement('ul')
ul.setAttribute('class', 'notes')

data.forEach(function(note) {
    var li = document.createElement('li')
      ul.appendChild(li)
      li.appendChild(document.createTextNode(note.content))
    })


document.getElementById('notes').appendChild(ul)
 
//var xhttp = new XMLHttpRequest()
//xhttp.

// 1. top of the DOM is "document"

//get is important

list = document.getElementsByTagName('ul')[0]

newElement = document.createElement('li')
newElement.textContent = 'Page manipulation from console is easy'
list.appendChild(newElement)