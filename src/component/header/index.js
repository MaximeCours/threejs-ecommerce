import './style.scss'

const { pathname } = window.location

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Shoes', url: '/shoes/' },
  { name: 'Pins', url: '/pins/' },
  { name: 'Personalize it !', url: '/personalize-it/' },
]

document.querySelector('.header').innerHTML = `
<header>
  <ul>
    ${pages
      .map(
        (page) => `
    <li ${pathname === page.url ? "class='active'" : ''}><a href="${page.url}">${
          page.name
        }</a></li>
  `
      )
      .join('')}
  </ul>
</header>
`
