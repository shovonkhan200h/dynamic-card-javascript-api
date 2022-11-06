let data=[
    {
        name:`shovon`,
        age : `27`
       
    },
    {
        name:`nabila`,
        age : `27`
       
    },
    {
        name:`sajeeb`,
        age : `25`
       
    },{
        name:`anan`,
        age : `29`
       
    }
];

const info = document.querySelector(`#info`);

let detials= data.map(function(item){
    return(`<div>`+item.name+` : `+item.age +`</div>`)
})

info.innerHTML = detials.join(``);