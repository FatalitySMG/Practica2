'use strict' 

// jsdoc
/**
 * Create a HTML element with attributes and children
 * @param {string} tagName HTML tag
 * @param {Object} attributes HTML attributes
 * @param {Array} children HTML child elements
 * @returns {HTMLElement} DOM instance of HTMLElement
 * @example
 *
 * const el = createElement('h1', { class: 'title' }, ['Hi createElement'])
 * console.log(el)
 *
 * // <h1 class="title">Hi createElement</h1>
 */
function createElement(tagName, attributes, children) {
  if (typeof tagName !== 'string') throw new Error('tagName must be an string')

  const el = document.createElement(tagName)

  if (attributes) {
    if (Object.prototype.toString.call(attributes) !== '[object Object]') {
      throw new Error('attributes mus be an object')
    }

    Object.keys(attributes).forEach(attr => {
      el.setAttribute(attr, attributes[attr])
    })
  }

  if (!Array.isArray(children)) throw new Error('children must be an array')

  addChild(el, children)
  return el
}

/**
 *
 * @param {HTMLElement} parent
 * @param {Array} children
 */
function addChild (parent, children) {
  if (!Array.isArray(children)) throw new Error('children must be an array')

  if (!(parent instanceof window.HTMLElement)) throw new Error('parent must be an instance of HTMLElement')

  children.forEach(child => {
    if (child instanceof window.HTMLElement) {
      parent.appendChild(child)
    } else {
      parent.innerHTML += child // parent.innerHTML = parent.innerHTML + child
    }
  })
}

const url = 'https://idwapi-juvasquez88.vercel.app/js';
let phrases = [];

fetch(url)
  .then(response => response.json())
  .then(data => {
      for (var i = 0; i < data.phrases.length ; i++){
          phrases.push(data.phrases[i].phrase);
      }
  })
  .catch(err => {
    console.error(`${err.name}: ${err.message}`)
    throw new Error(err.message)
  })

console.log(phrases)

function find() {

  var section = document.getElementsByClassName('list');
  while(section[0]) {
    section[0].parentNode.removeChild(section[0]);
}
  
    const main = document.getElementById('main')
    const newSection = createElement('section', {class:'list'},[])
    main.appendChild(newSection)  
    
   

    var inputVal = document.getElementById("input").value;
    var input_lower = inputVal.toLowerCase()

    if (input_lower == ""){
        for (const i in phrases) {
            
            
            const phrase = phrases[i]
            const P = createElement('p', {class:'list-element'}, [phrase])
            newSection.appendChild(P)
            
    }
    
    } else {
        for(const i in phrases){

          const phrase_lower = phrases[i].toLowerCase()

          if(phrase_lower.includes(input_lower) == true){
            
            const phrase = phrases[i]
            const P = createElement('p', {class:'list-element'}, [phrase])
            newSection.appendChild(P)
          }
        }
        
}

}