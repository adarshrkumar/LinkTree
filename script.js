let color = '#0078d7'
let pfpSrc = 'https://RockGamerAK.com/RockGamerAK.png'
let name = 'RockGamerAK'
let bio = `Hello, my name is RockGamerAK. I'm 15 years old, and a High School Student.<br>I am good with software, so if you need tech help, DM @w.web.wizards or email ww@RockGamerAK.com. I also enjoy history and geography.`
let links = [
  {
    url: 'https://RockGamerAK.com', 
    title: 'My Website', 
  }, 
  {
    url: 'https://wa.me/16502605732', 
    title: 'WhatsApp Me', 
  }, 
]


let HElement = document.documentElement
HElement.style = `--bg-color: ${color};`

let pElement = document.body.querySelector('section#prof')
let pfpElement = pElement.querySelector('img#pfp')
let nameElement = pElement.querySelector('h1#name')
let bioElement = pElement.querySelector('p#bio')
pfpElement.src = pfpSrc
nameElement.innerHTML = name
bioElement.innerHTML = bio

let lElement = document.body.querySelector('section#link')
let ulElements = lElement.querySelectorAll('ul')
let i = 0

links.forEach(link => {
  let url = link['url']
  let title = link['title']
  let uprev = url.split('://')[1]
  let imgSrc = `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=64&url=https://${uprev.split('/')[0].replace('wa.me', 'whatsapp.com')}`

  let e = ulElements[i]
  let li = document.createElement('li')
  li.setAttribute('onclick', `window.open('${url}')`)
  e.appendChild(li)
  
  let img = document.createElement('img')
  img.src = imgSrc
  li.appendChild(img)
  
  let div = document.createElement('div')
  li.appendChild(div)

  let tEle = document.createElement('span')
  tEle.innerHTML = title
  div.appendChild(tEle)

  let pEle = document.createElement('span')
  pEle.innerHTML = uprev
  div.appendChild(pEle)

  if (i === 0) {
    i = 1
  }
  else if (i === 1) {
    i = 0
  }
})