const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
];
//CREO HTML E METTO OGGETTI AL SUO INTERNO
let container = document.getElementById("container");
 
for (let i = 0; i < posts.length; i++) {
  let contenutoHTML = `<div id="${posts[i].id}" class="post"> `;
  contenutoHTML += `<div class="post__header">`;
  contenutoHTML += ` <div class="post-meta"> `;
  contenutoHTML += `<div class="post-meta__icon">`;
  if (posts[i].author.image != null) {
    contenutoHTML+=  `<img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">`;
  }else{
    contenutoHTML+=`<div class="profile-pic-default"><span>LF</span></div>`;
  }

  contenutoHTML += `</div>`;
  contenutoHTML += `<div class="post-meta__data">
    <div class="post-meta__author">${posts[i].author.name}</div>
    <div class="post-meta__time">${posts[i].created}</div>
    </div>`;
  contenutoHTML+= `</div></div>`;
  contenutoHTML+=`<div class="post__text">${posts[i].content}</div>`;
  contenutoHTML+=`<div class="post__image">
    <img src="${posts[i].media}" alt="">
    </div>`;
  contenutoHTML+=`<div class="post__footer">
    <div class="likes js-likes">
      <div class="likes__cta">
          <a class="like-button  js-like-button" href="#" data-postid="1">
              <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
              <span class="like-button__label">Mi Piace</span>
          </a>
      </div>
      <div class="likes__counter">
          Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
      </div>
    </div> 
    </div>`;
  contenutoHTML+=`</div>`;

  container.innerHTML += contenutoHTML;
}

//ARRAY ID
let ArrayCurrentLike = []

//POPOLO ARRAY ID
posts.forEach((element,index) => {
    const like = element.likes;
    ArrayCurrentLike.push(like);
});
console.log(ArrayCurrentLike);

// DEFINISCO BOTTONI
let buttonLike = document.querySelectorAll(".like-button")
//    DEFINISCO CICLO FOR PER IL CLICK
for (let i = 0; i < buttonLike.length; i++) {
  const elementsButton = buttonLike[i];
  elementsButton.addEventListener("click", function(){
  // PRENDO ELEMENTO HTML DELL'ID CON IL THIS
  
  if (elementsButton.classList.contains("like-button--liked")){
    // PARTE LA FUNZIONE DECREMENTO
    tolgoLike(i);
                
    }else {
    // PARTE LA FUNZIONE INCREMENTO
    aggiungoLike(i);
    }
    elementsButton.classList.toggle("like-button--liked");
    //DEFINISCO HTML
    document.querySelectorAll(".js-likes-counter")[i].innerHTML = posts[i].likes;
    })
  }




/////////////////////////////////////FUNZIONI/////////////////////////


// FUNZIONE INCREMENTO LIKE
    function aggiungoLike(indice) {
        posts[indice].likes++;
        console.log(posts[indice].likes);
    } 

// FUNZIONE DECREMENTO LIKE
function tolgoLike(indice) {
    posts[indice].likes--;
    console.log(posts[indice].likes);
} 