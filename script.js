// dropdown function

// function myFunction() {
//     document.querySelectorAll('.dropdown-content').innerHTML = 'HELLO WORLD';
// }

// function myFunction() {
//     document.querySelector("#myDropdown").classList.toggle("show");
//   }

const accordions = document.querySelectorAll('.accordion')

for (let accordion of accordions) {
    accordion.addEventListener('click', function () {
        /* Toggle between adding and removing the "active" class */
        this.classList.toggle('active')
         /* Toggle between hiding and showing the active panel */
        const panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        }
        else {
            panel.style.display = 'block'
        }
    })
}