atributo = "background-image: url('https://pabloavelar.mx/wpw/b.jpg'); opacity: 1";
console.log("Hola mundo");
try{
    //default
    var tag = document.getElementsByClassName("fzCXy");
    var i;
    for(i = 0; i<=tag.length; i++){
        tag[i].setAttribute("style", atributo);
    }
}catch(e){
    //fondo de color
    var tag = document.getElementsByClassName("_3GHFH");
    var i;
    for(i = 0; i<=tag.length; i++){
        tag[i].setAttribute("style", atributo);
    }
}