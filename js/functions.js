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


         













            
    
   


