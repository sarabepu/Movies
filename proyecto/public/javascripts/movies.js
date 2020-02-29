let movies= document.getElementsByClassName("card");

function toogleTitle(card, pDisplay )
{

    let num= card.id.split('-')[1];
        let idTitle= "title-"+num
        let title= document.getElementById(idTitle);
        title.style.display=pDisplay;
}

function titles(path, over)
{  
        
        let filtro=path.filter((i)=>{
            return i.id && i.id.includes("contenedor");
        });
        
        let card= filtro[0];
         
        toogleTitle(card, over);
        
        
    
}

for( var movie of movies)
{
    movie.onmouseover = (e)=>{
        titles(e.path,'None')
    }
    movie.onmouseout = (e)=>{
        titles(e.path,'block')
    }
}