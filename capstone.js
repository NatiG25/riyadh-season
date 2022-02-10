const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

// Featured speakers
let projects = [
  {
    title: 'Al-Waleed bin Talal',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
    src: 'https://static01.nyt.com/images/2017/11/12/us/05Saudi/05Saudi-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  },

  {
    title: 'Mohammed Hussein Al Amoudi',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
    src: 'https://www.africatopsuccess.com/wp-content/uploads/2013/10/mohammed-al-amoudi.jpg',
  },

  {
    title: 'Saleh Kamel',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
    src: 'https://static.mubasher.info/File.Story_Image/4e4b61bb7d76de020c9350a5f2b7bfc4/640.jpg',
  },

  {
    title: 'Amin H. Nasser',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
    src: 'https://china.aramco.com/-/media/aramcochina/news-images/amin-nasser-president-and-ceo-web.jpg',
  },
  
  {
    title: 'Jasser Abdullah Jasser Al Ahmadi',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
    src: 'https://makkahnewspaper.com/uploads/images/2021/10/23/1396741.jpg',
  },

  {
    title: 'Mazen M. Hassanain',
    headTitle: 'Co-Founder and Managing Director, SaudiVax.',
    description: 'A well-known investor.',
    src: 'https://6erxg60qvo1qvjha44jrgpan-wpengine.netdna-ssl.com/wp-content/uploads/2021/12/Screenshot-2021-12-20-at-14.16.14.png',
  },
]

let speakers = document.querySelector('#speakers');
speakers.innerHTML = `
<h2 class="mt-5 text-center">Featured Speakers</h2>
<hr style="width:10%; height: 3px; color:red; margin-left: 45%;">
<div class="container">

<article class="row">
<div class="col my-4">
<img class="img-fluid" src="${projects[0].src}" alt="A Saudi Prince">
</div>
<div class="col  my-4">
  <h2>${projects[0].title}</h2>
  <p class="feature-text">${projects[0].headTitle}</p>
  <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
  <p class="fst-italic">${projects[0].description}</p>
  </div>
</article>

<article class="row">
<div class="col my-4">
<img class="img-fluid" src="${projects[1].src}" alt="A Saudi Prince">
</div>
<div class="col  my-4">
  <h2>${projects[1].title}</h2>
  <p class="feature-text">${projects[1].headTitle}</p>
  <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
  <p class="fst-italic">${projects[1].description}</p>
  </div>
</article>

<article class="row">
<div class="col my-4">
<img class="img-fluid" src="${projects[2].src}" alt="A Saudi Prince">
</div>
<div class="col  my-4">
  <h2>${projects[2].title}</h2>
  <p class="feature-text">${projects[2].headTitle}</p>
  <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
  <p class="fst-italic">${projects[2].description}</p>
  </div>
</article>

<article class="row">
<div class="col my-4">
<img class="img-fluid" src="${projects[3].src}" alt="A Saudi Prince">
</div>
<div class="col  my-4">
  <h2>${projects[3].title}</h2>
  <p class="feature-text">${projects[3].headTitle}</p>
  <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
  <p class="fst-italic">${projects[3].description}</p>
  </div>
</article>

<article class="row">
<div class="col my-4">
<img class="img-fluid" src="${projects[4].src}" alt="A Saudi Prince">
</div>
<div class="col  my-4">
  <h2>${projects[4].title}</h2>
  <p class="feature-text">${projects[4].headTitle}</p>
  <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
  <p class="fst-italic">${projects[4].description}</p>
  </div>
</article>

<article class="row">
<div class="col my-4">
<img class="img-fluid" src="${projects[5].src}" alt="A Saudi Prince">
</div>
<div class="col  my-4">
  <h2>${projects[5].title}</h2>
  <p class="feature-text">${projects[5].headTitle}</p>
  <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
  <p class="fst-italic">${projects[5].description}</p>
  </div>
</article>
</div>

`