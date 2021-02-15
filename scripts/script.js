var array =   [
    {
        name: 'JavaScript',
        loading: '50',
        img: './files/ico_js.png'
    },
    {
        name: 'HTML',
        loading: '20',
        img: './files/ico_html5.png'
    },
    {
        name: 'CSS',
        loading: '70',
        img: './files/ico_css3.png'
    },
    {
        name: 'Nodejs',
        loading: '70',
        img: './files/ico_nodejs.png'
    },
    {
        name: 'React',
        loading: '70',
        img: './files/ico_react.png' 
    },
    {
        name: 'UX',
        loading: '70',
        img: './files/ico_ux.png'
    },
]

array.forEach(tit => {
    reste.innerHTML += `
    <img id="skilss_img" src=${tit.img}>
    <h2 id="skills_Title" >${tit.name}</h2>
    <progress class="skills_loading" value=${tit.loading} max="100">loading</progress>`
  })



