const icons = document.querySelectorAll('.icons > img')

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    console.log(icon)
  })
})
