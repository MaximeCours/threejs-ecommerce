import './style.scss'

const { pathname } = window.location

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Shoes', url: 'crocs.html' },
  { name: 'Pins', url: 'pins.html' },
  { name: 'Personalize it !', url: 'personnaliser.html' },
]

const path = pathname.length > 1 ? pathname.slice(1) : pathname // Get page name from URL
document.querySelector('.header').innerHTML = `
<header>
  <ul>
    ${pages
      .map(
        (page) => `
    <li ${path === page.url ? "class='active'" : ''}><a href="${page.url}">${
          page.name
        }</a></li>
  `
      )
      .join('')}
  </ul>
</header>
`
