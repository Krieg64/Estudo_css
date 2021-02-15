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

var view_skills = document.getElementById('view_skills')

array.forEach(tit => {
    view_skills.innerHTML += `
    <div class="components_skills" >
        <img class="skilss_img" src=${tit.img}>
        <div class="skills_info">
            <h2 class="skills_Title" >${tit.name}</h2>
            <progress class="skills_loading" value=${tit.loading} max="100">texto</progress>
        </div>
    </div>
    `
  })



