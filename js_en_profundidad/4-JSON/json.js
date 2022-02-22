'use strict'
window.addEventListener("load",function(){

    var pelicula={
        titulo:'batman',
        year:2017,
        pais:'usa'
    };

    var peliculas = [
        {titulo:"spiderman",year:2021,pais:"usa"},
        {titulo:"raw",year:2015,pais:"francia"},
        pelicula
    ];

    var caja_peliculas=document.querySelector("#peliculas")

    for(let index in peliculas)
    {
        var p=document.createElement("p");
        p.append(peliculas[index].titulo+" - "+peliculas[index].year);
        caja_peliculas.append(p);
    }
});