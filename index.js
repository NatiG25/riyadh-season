const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Featured speakers
const projects = [
  {
    src: 'https:static01.nyt.com/images/2017/11/12/us/05Saudi/05Saudi-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    title: 'Al-Waleed bin Talal',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
  },

  {
    src: 'https:www.africatopsuccess.com/wp-content/uploads/2013/10/mohammed-al-amoudi.jpg',
    title: 'Mohammed Hussein Al Amoudi',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
  },

  {
    src: 'https:static.mubasher.info/File.Story_Image/4e4b61bb7d76de020c9350a5f2b7bfc4/640.jpg',
    title: 'Saleh Kamel',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
  },

  {
    src: 'https:china.aramco.com/-/media/aramcochina/news-images/amin-nasser-president-and-ceo-web.jpg',
    title: 'Amin H. Nasser',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
  },

  {
    src: 'https:makkahnewspaper.com/uploads/images/2021/10/23/1396741.jpg',
    title: 'Jasser Abdullah Jasser Al Ahmadi',
    headTitle: 'A prince from a royal family.',
    description: 'A well-known investor.',
  },

  {
    src: 'https:6erxg60qvo1qvjha44jrgpan-wpengine.netdna-ssl.com/wp-content/uploads/2021/12/Screenshot-2021-12-20-at-14.16.14.png',
    title: 'Mazen M. Hassanain',
    headTitle: 'Co-Founder and Managing Director, SaudiVax.',
    description: 'A well-known investor.',
  },
];

const speakers = document.querySelector('.speakers');

speakers.innerHTML += projects.map((item) => `<article class="row">
<div class="col my-4">
<img class="img-fluid" src="${item.src}" alt="A Saudi Prince">
</div>
<div class="col  my-4">
  <h2>${item.title}</h2>
  <p class="feature-text">${item.headTitle}</p>
  <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
  <p class="fst-italic">${item.description}</p>
  </div>
  </article>`).join('');

// Desktop Featured speakers
const speakersDesktop = document.querySelector('.speakers-desktop');

const speakersDesktopSections = (projects) => {
  let allSections = '';
  for (let i = 0; i < projects.length; i += 1) {
    allSections += `<section class="mt-5">
  <div class="row">
  <div class="col-3">
  <img class="img-fluid" src="${projects[i].src}" alt="A Saudi Prince">
  </div>
  <div class="col-3">
  <h4>${projects[i].title}</h4>
    <p class="feature-text">${projects[i].headTitle}</p>
    <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
    <p class="fst-italic">${projects[i].description}</p>
  </div>

 <div class="col-3">
 <img class="img-fluid" src="${projects[i + 1].src}" alt="A Saudi Prince">
 </div>
 <div class="col-3">
 <h4>${projects[i + 1].title}</h4>
   <p class="feature-text">${projects[i + 1].headTitle}</p>
   <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
   <p class="fst-italic">${projects[i + 1].description}</p>
 </div>
 </div>
 </section>
`;
    i += 1;
  }
  return allSections;
};

speakersDesktop.innerHTML += speakersDesktopSections(projects);
