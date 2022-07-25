import { Router } from './router.js'

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/theuniverse', '/pages/the_universe.html')
router.add('/exploration', '/pages/exploration.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

//Mudança de background
const body = document.querySelector('body')
const home = document.querySelector('nav a:nth-child(2)')
const universe = document.querySelector('nav a:nth-child(3)')
const exploration = document.querySelector('nav a:nth-child(4)')
console.log(home)
home.addEventListener('click', function () {
  body.classList.remove('universe')
  body.classList.remove('exploration')
  home.classList.add('active')
  universe.classList.remove('active')
  exploration.classList.remove('active')
})
universe.addEventListener('click', function () {
  body.classList.remove('exploration')
  body.classList.add('universe')
  home.classList.remove('active')
  universe.classList.add('active')
  exploration.classList.remove('active')
})
exploration.addEventListener('click', function () {
  body.classList.remove('universe')
  body.classList.add('exploration')
  home.classList.remove('active')
  universe.classList.remove('active')
  exploration.classList.add('active')
})
