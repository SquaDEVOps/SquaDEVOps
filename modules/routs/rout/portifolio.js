function generateDev(imgSrc, name, points, iframeSrc, rank){

    let tempHTML = `
    <div class="card">

        <div class="developer-credit">
            <img src="${imgSrc}" alt="">
            <p class="name"> ${name} - SquaDevOps </p>
            <div class="points"> 
                <p> <span data-lang="code-drop-point"> Pontos: </span> ${points} </p>
                <p> <span data-lang="code-drop-rank"> Rank: </span>  </p>
                <svg class="icon ${rank}"><use xlink:href="#${rank}"></use></svg>
            </div>
        </div>

        <iframe scrolling="no" title="Parallax scroll animation" src="${iframeSrc}?height=269&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

        <div class="uglify-bottom"></div>

    </div>
        `;

    return tempHTML;

}

let card1 = generateDev(
 'https://assets.codepen.io/566396/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1&width=80',
 'Lucas Hiago',
  7,
  'https://codepen.io/lucashiagodsf/embed/rNMbVVV',
  'icon-chevron');


let card2 = generateDev(
    'https://assets.codepen.io/566396/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1&width=80',
    'Lucas Hiago',
     7,
     'https://codepen.io/lucashiagodsf/embed/gOMbWOP',
     'icon-chevron'
);


let card3 = generateDev(
    'https://assets.codepen.io/566396/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1&width=80',
    'Lucas Hiago',
     7,
     'https://codepen.io/lucashiagodsf/embed/RwRNVbw',
     'icon-chevron'
);

let card4 = generateDev(
    'https://assets.codepen.io/566396/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1&width=80',
    'Lucas Hiago',
     7,
     'https://codepen.io/lucashiagodsf/embed/mdEyWYd',
     'icon-chevron'
);



let card5 = generateDev(
    'https://assets.codepen.io/566396/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1&width=80',
    'Lucas Hiago',
     7,
     'https://codepen.io/lucashiagodsf/embed/XWKJMQq',
     'icon-chevron'
);

let card6 = generateDev(
    'https://assets.codepen.io/566396/internal/avatars/users/default.png?fit=crop&format=auto&height=80&version=1&width=80',
    'Lucas Hiago',
     7,
     'https://codepen.io/lucashiagodsf/embed/rNxxbBx',
     'icon-chevron'
);





function portifolio(){
    let tempHTML = `
        <div class="projects">
            <div class="close-portifolio" data-lang="code-drop-back"> Voltar </div>
            <h2 data-lang="code-drop-title">Fragmentos de código concursos</h2>
            <div class="projectsCards">
                ${card1}
                ${card2}
                ${card3}
                ${card4}
                ${card5}
                ${card6}
            </div>
        </div>
    `;
    return tempHTML;
}

export {
    portifolio
}