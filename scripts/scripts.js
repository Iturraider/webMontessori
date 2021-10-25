$(document).ready(function(){

$('#boton').click(function(){
    if($('#boton').attr("class") === "boton mostrarTitulo"){
        $('#titulo_header').css('color', '#494342');
        $('#header').css('background-color', '#F0F3F4');
        $('body').css('background-color', '#494342');
        $('.boton').css('color', '#F0F3F4');
        $('.boton').css('background-color', '#494342');
        $('.img').css('fill', '#F0F3F4');
        $('#boton').removeClass('mostrarTitulo');
        $('#imgLuna').css('display', 'none');
        $('#imgSol').css('display', 'block');
    } else  if($('#boton').attr("class") === "boton"){
        $('#titulo_header').css('color', '#F0F3F4');
        $('#header').css('background-color', '#494342');
        $('body').css('background-color', '#F0F3F4');
        $('.boton').css('color', '#494342');
        $('.boton').css('background-color', '#F0F3F4');
        $('.img').css('fill', '#494342');
        $('#boton').addClass('mostrarTitulo');
        $('#imgLuna').css('display', 'block');
        $('#imgSol').css('display', 'none');
    }
})

$('#botonMenu').click(function(){
    $('#botonMenu').css('display', 'none');
    $('#menu').css('left', '0');
})
$('#closeMenu').click(function(){
    if ($(window).width() > 500){
    $('#botonMenu').css('display', 'flex');
    $('#menu').css('left', '-50%');
    } else {
        $('#botonMenu').css('display', 'flex');
        $('#menu').css('left', '-100%');
    }
})

//LogIn!!!!


var form = document.getElementById("formulario");
form.onsubmit = function(e){
    if($('#password').val() === 'salut33'){
        console.log("Esto funciona");
    } else {
        alert("Error");
        e.preventDefault();
    }
}

/*$('#password').keypress(function(e){
    var key = e.which;
 if(key == 13)  // the enter key code
  {
    $('#login').click();
    return false;  
  }
})*/




/*$('#login').click(function(){
    if($('#password').val() === 'salut33'){
        window.open('/inicio.html',"_self");
        console.log("Esto funciona");
    } else {
        alert("Error");
        console.log("Mensaje de alerta");
    }
})
*/
})

