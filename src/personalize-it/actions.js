import { updateShoeColor } from "./preview.js";

const icons = document.querySelectorAll('.icons > img')

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    switch (icon.id){
      case "model":

        break
      case "pins":

        break
      case "color":
        updateShoeColor()
        break
      case "rotate":

        break
    }
    console.log(icon)
  })
})
