
var proyectos=document.getElementById("card-proyectos");
proyectos.addEventListener("click", mostrarProyectos);
var closeIcon=document.getElementsByClassName("close-icon");   



function mostrarProyectos(){
    
    let descripcionProyectos = document.getElementById("descripcionProyectos");
    descripcionProyectos.style.display="block";
    descripcionProyectos.style.animation="mostrar 1s ease";
    closeIcon[0].addEventListener('click', cerrar);
    function cerrar(){
        descripcionProyectos.style.animation="ocultar 1s ease";
        descripcionProyectos.style.display="none";
    }
          
         
}
var consultoria=document.getElementById("card-consultoría");
consultoria.addEventListener("click", mostrarConsultoria);

function mostrarConsultoria(){
    let descripcionConsultoria=document.getElementById("descripcion-consultoria");
    descripcionConsultoria.style.display="block";
    descripcionConsultoria.style.animation="mostrar 1s ease";
    closeIcon[1].addEventListener('click', cerrarConsultoria);
    function cerrarConsultoria(){
        descripcionConsultoria.style.animation="ocultar 1s ease";
        descripcionConsultoria.style.display="none";
    }
}
var obras=document.getElementById("card-obras");
obras.addEventListener("click", mostrarObras);

function mostrarObras(){
    let descripcionObras=document.getElementById("descripcion-obras");
    descripcionObras.style.display="block";
    descripcionObras.style.animation="mostrar 1s ease";
    closeIcon[2].addEventListener('click', cerrarObras);
    function cerrarObras(){
        console.log("me ejecuto");        
        descripcionObras.style.display="none";
    }
}
let btnAntecedentes= document.getElementById('boton');
btnAntecedentes.addEventListener('click', mostrar2020);

function mostrar2020(){
    let antecedentes2020=document.getElementById("antecedentes2020");
    antecedentes2020.style.display="block";
    antecedentes2020.style.animation="mostrar 1s ease";
    antecedentes2020.style.transition="1s ease";
    closeIcon[3].addEventListener('click',cerrar2020);
    function cerrar2020(){
        antecedentes2020.style.display="none";
        
    }

}

let btn2019 = document.getElementById('boton2');
btn2019.addEventListener('click', mostrar2019);

function mostrar2019() {
    let antecedentes2019=document.getElementById('antecedentes2019');
    antecedentes2019.style.display="block";
    antecedentes2019.style.animation="mostrar 1s ease";
    
    closeIcon[4].addEventListener('click', cerrar2019);
        function cerrar2019(){
            antecedentes2019.style.display="none";
        }
}

let btn2018 = document.getElementById('boton3');
btn2018.addEventListener('click', mostrar2018);

function mostrar2018(){
    let antecentes2018 = document.getElementById('antecedentes2018');
    antecentes2018.style.display="block";
    antecentes2018.style.animation="mostrar 1s ease";

    closeIcon[5].addEventListener('click', cerrar2018);
        function cerrar2018(){
            antecentes2018.style.display="none";
        }
}

let btn2017 = document.getElementById('boton4');
btn2017.addEventListener('click', mostrar2017);

function mostrar2017(){
    let antecedentes2017= document.getElementById('antecedentes2017');
    antecedentes2017.style.display="block";
    antecedentes2017.style.animation="mostrar 1s ease";
    

    closeIcon[6].addEventListener('click', cerrar2017);
        function cerrar2017(){
            antecedentes2017.style.display="none";
        }
}
let formulario=document.getElementById("formulario");
let btnFormulario=document.getElementById("form-btn");
        
        btnFormulario.addEventListener('click',sendToWhatsapp);

                

         function sendToWhatsapp(enviar){ 
            enviar.preventDefault();
            console.log("Me ejecuto");
            let nombre=document.getElementById("nombre").value;
            let apellido=document.getElementById("apellido").value;
            let email=document.getElementById("email").value;
            let telefono=document.getElementById("telefono").value;
            let textarea=document.getElementById("textarea").value;

            let mensaje=(`Hola Adrián. Soy ${nombre} ${apellido}. ${textarea}. Mi teléfono de contacto es ${telefono} y mi email: ${email}. Gracias`);
            const phone=parseInt(5493575402489);
            const URL = `https://api.whatsapp.com/send?phone=${phone}&text=${mensaje}`;
            window.open(URL, "_blank");
            formulario.reset();                        
            }
    

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
            pauseOnHover: false,
            responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});


         













            
    
   


