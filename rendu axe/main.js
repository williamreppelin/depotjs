

  document.addEventListener('DOMContentLoaded',function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        autoplay: {
            delay: 2000,
          },
      });
  })

  const lightbox= new SimpleLightbox('.card a')

  const options = {
    gutterPixels: 50
  }

  const filterizr = new Filterizr('.portfolio-elements', options)

  let filterItems= document.querySelectorAll(".filters li")
  filterItems.forEach(function(filterItem){
    filterItem.addEventListener('click', function(){
        document.querySelector('.filters .active').classList.remove('active')
        filterItem.classList.add('active')
    })
  })


  let form = document.querySelector('form')

  form.addEventListener('submit', function(eventS){
    event.preventDefault()

    let errorContainer =document.querySelector('.message-error')
    let errorList = document.querySelector('.message-error ul')
    errorList.innerHTML = ""
    errorContainer.classList.remove('visible')
    let email = document.querySelector('#email')
    if (email.value ===''){
        errorContainer.classList.add('visible')
        email.classList.remove('success')
    } else{
        email.classList.remove('success')
    }
    

  })