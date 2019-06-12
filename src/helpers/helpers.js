// // External Libs
// import SmoothScroll from 'smooth-scroll'

// export const scrollHeader = () => {
//   const header = document.getElementById('headerMain')
//   window.onscroll = e => {
//     scrollFunction()
//     function scrollFunction() {
//       if (
//         document.body.scrollTop > 50 ||
//         document.documentElement.scrollTop > 50
//       ) {
//         header.classList.add('fill')
//         header.classList.remove('unfill')
//       } else {
//         header.classList.remove('fill')
//         header.classList.add('unfill')
//       }
//     }
//   }
// }

// export const finishTransaction = () => {
//   const overlay = document.getElementsByClassName('overlay')[0]
//   overlay.classList.add('overlay--not-visible')
//   overlay.classList.remove('overlay--is-visible')
// }
// export const toggleOverlay = () => {
//   const overlay = document.getElementsByClassName('overlay')[0]

//   if (overlay.classList.contains('overlay--not-visible')) {
//     overlay.classList.add('overlay--is-visible')
//     overlay.classList.remove('overlay--not-visible')
//   } else {
//     overlay.classList.add('overlay--not-visible')
//     overlay.classList.remove('overlay--is-visible')
//   }
// }
// export const toggleFlip = () => {
//   const card = document.getElementsByClassName('flip')[0]

//   if (card.classList.contains('flip--active')) {
//     card.classList.remove('flip--active')
//     card.classList.add('flip--reverse')
//   } else {
//     card.classList.add('flip--active')
//     card.classList.remove('flip--reverse')
//   }
// }

// export const closeOverlay = () => {
//   const overlay = document.getElementsByClassName('overlay')

//   overlay.onclick = () => {
//     overlay.classList.add('overlay--not-visible')
//     overlay.classList.remove('overlay--is-visible')
//   }

//   document.onkeydown = function(evt) {
//     const overlay = document.getElementsByClassName('overlay')[0]
//     evt = evt || window.event
//     var isEscape = false
//     if ('key' in evt) {
//       isEscape = evt.key === 'Escape' || evt.key === 'Esc'
//     } else {
//       isEscape = evt.keyCode === 27
//     }
//     if (isEscape) {
//       overlay.classList.add('overlay--not-visible')
//       overlay.classList.remove('overlay--is-visible')
//     }
//   }

//   // console.log('click overlay')
// }

// export const moneyFormat = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
//   minimumFractionDigits: 2,
// })

// export const smoothScroll = () => {
//   try {
//     const scroll = new SmoothScroll('a[href*="#"]', {
//       ignore: '[data-scroll-ignore]',
//       header: null,
//       topOnEmptyHash: true,

//       // Speed & Duration
//       speed: 500,
//       speedAsDuration: false,
//       durationMax: null,
//       durationMin: null,
//       clip: true,

//       easing: 'easeInOutCubic',
//       customEasing: function(time) {
//         return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time
//       },
//       updateURL: false, // Update the URL on scroll
//       popstate: false,

//       // Custom Events
//       emitEvents: true, // Emit custom events
//     })
//     return scroll
//   } catch (oError) {
//     console.log(oError)
//   }
// }

// export const toggleClass = (selector, class1, class2) => {
//   const el = selector
//   el.classList.remove(class1)
//   el.classList.add(class2)
// }
