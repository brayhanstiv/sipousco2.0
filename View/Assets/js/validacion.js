//Metodo 1-100

function deunoacien(){
    var id1 = document.getElementById('notaltc');
    if( id1>= 1 && id1 <= 100){
        alert("Digite una nota entre 1 a 100");
    }
}

//Metodo convertir texto a mayusculas

    function ConvMayusculas(id){

        var x = document.getElementById(id);
        x.value = x.value.toUpperCase();

    }

//Metodo para validar texto con espacio

    function validar(e) {
             tecla = (document.all) ? e.keyCode : e.which; // 2
             if (tecla==13){ return false};
            if (tecla==8) return true; // 3
            if (tecla==9){ return true};
            if (tecla==32){return true};
            if ((tecla > 64 && tecla < 91) || (tecla > 96 && tecla < 123)){
                patron =/[A-Za-zñÑ\s]/; // 4
                te = String.fromCharCode(tecla); // 5
                return patron.test(te); // 6
            }
            
            return false;
    }

//Funcion para comprobar si un campo está vacío


    window.onload = function cargar (){
      var  container = document.getElementById('ocultar');
      var mostrar = document.getElementById('cargar');
      container.style.display= 'none';
      mostrar.style.display = 'block';
      
    
    }
    
    function Vacio(obj, opc) {

      if (obj.value=='') {
          if ((document.all)||(document.getElementById)) {
              obj.style.borderColor = '#D90038';
              switch (opc) {
                case 'name':
                    document.getElementById('botone1').style.display = 'block';
                    document.getElementById('botonc1').style.display = 'none';
                    document.getElementById('boton').disabled = true;
                    document.getElementById('password2').disabled=true;
                    return false;
                  break;
                case 'apellido':
                    document.getElementById('botone2').style.display = 'block';
                    document.getElementById('botonc2').style.display = 'none';
                    document.getElementById('boton').disabled = true;
                    document.getElementById('password2').disabled=true;
                    return false;
                  break;

              }//fin del switch

          }//fin del if
      } else {
          if ((document.all)||(document.getElementById)) {


              switch (opc) {
                case 'name':
                obj.style.borderColor = '#028000';
                document.getElementById('botonc1').style.display = 'block';
                document.getElementById('botone1').style.display = 'none';
                return true;
                  break;
                case 'apellido':
                obj.style.borderColor = '#028000';
                    document.getElementById('botonc2').style.display = 'block';
                    document.getElementById('botone2').style.display = 'none';
                    return true;
                  break;
                default:

              }//Fin del switch para dar color al borde
          }//fin del if
      }//fin del else
    }//fin del metodo

    //Metdodo para validar solo numeros

    function validar2(e, field){
        
        key = e.keyCode ? e.keyCode : e.which; // 2
             if (key==13){ return false};
            if (key==8) return true; // 3
            // 0-9
              if (key > 47 && key < 58) {
                if (field.value == "") return true;
                regexp = /.[0-9]{2}$/;
                return !(regexp.test(field.value));
              }
              
            return false;
      
    }
    
   function NumCheck(e, field) {
  key = e.keyCode ? e.keyCode : e.which;
  // backspace
  if (key == 8) return true;
  // 0-9
  if (key > 47 && key < 58) {
    if (field.value == "") return true;
    regexp = /.[0-9]{2}$/;
    return !(regexp.test(field.value));
  }
  // .
  if (key == 46) {
    if (field.value == "") return false;
    regexp = /^[0-9]+$/;
    return regexp.test(field.value);
  }
  // other key
  return false;
 
}
    

      //Metodo para validar usuario

        function validarUsuario(obj){

          if (obj.value=='') {
              if ((document.all)||(document.getElementById)) {
                  obj.style.borderColor = '#D90038';
                  document.getElementById('botone4').style.display = 'block';
                  document.getElementById('botonc4').style.display = 'none';
                  document.getElementById('boton').disabled=true;
                  document.getElementById('mensaje_user').innerHTML = 'Digite un usuario';
                  document.getElementById('password2').disabled=true;
                  return false;
              }
          }else{

                obj.style.borderColor = '#028000'
                document.getElementById('botonc4').style.display = 'block';
                document.getElementById('botone4').style.display = 'none';
                return true;

          }//Fin del if else
        }//Fin de la funcion



    //Metodo para validar email

        function ValidarEmail(obj, email) {

          var correo= document.getElementById(email).value;

          if (obj.value=='') {
              if ((document.all)||(document.getElementById)) {
                  obj.style.borderColor = '#D90038';

                    document.getElementById('botone3').style.display = 'block';
                    document.getElementById('botonc3').style.display = 'none';
                    document.getElementById('mensaje_correo').innerHTML = 'Digite una dirreción de correo electrónico';
                    document.getElementById('boton').disabled=true;
                    document.getElementById('password2').disabled=true;
                    return false;

              }//fin del if
          }else{
            if ((document.all)||(document.getElementById)) {


                        expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                        if ( !expr.test(correo) ){
                          obj.style.borderColor = '#D90038';
                          document.getElementById('botone3').style.display = 'block';
                          document.getElementById('botonc3').style.display = 'none';
                          document.getElementById('mensaje_correo').innerHTML = 'Correo inválido';
                          document.getElementById('boton').disabled=true;
                          document.getElementById('password2').disabled=true;
                          return false;
                        }else{
                          obj.style.borderColor = '#028000';
                          document.getElementById('botone3').style.display = 'none';
                          document.getElementById('botonc3').style.display = 'block';
                          return true;
                        }



              }//fin del if superior
            }//fin del else
      }//Fin del método


  //Metodo para validacion de contraseñas, correos y cuentas

    function ValidaEspacios(){
      if((event.keyCode == 32) || (event.keyCode == 13)){
        event.returnValue = false;
      }
    }

    //Metodo validar contraseña está vacia y mayor o igual a 7 digitos

    function ValidarContra(obj){
      if (obj.value=='') {
          if ((document.all)||(document.getElementById)) {
              obj.style.borderColor = '#D90038';

                document.getElementById('botone5').style.display = 'block';
                document.getElementById('botonc5').style.display = 'none';
                document.getElementById('mensaje_pass1').innerHTML = 'Digite una contraseña';
                document.getElementById('boton').disabled=true;
                document.getElementById('password2').disabled=true;
                return false;

          }//fin del if
      }else{
        if ((document.all)||(document.getElementById)) {

                    var contra1 = document.getElementById('password1').value;
                    document.getElementById('password2').disabled=false;

                      if(contra1.length>=7){
                        obj.style.borderColor = '#028000';
                        document.getElementById('botone5').style.display = 'none';
                        document.getElementById('botonc5').style.display = 'block';
                        return true;
                      }else{
                        obj.style.borderColor = '#D90038';
                        document.getElementById('botone5').style.display = 'block';
                        document.getElementById('botonc5').style.display = 'none';
                        document.getElementById('mensaje_pass1').innerHTML = 'La contraseña debe ser mayor a 7 dígitos';
                        document.getElementById('boton').disabled=true;
                        document.getElementById('password2').disabled=true;
                        return false;
                      }

          }//fin del if superior
        }//fin del else
    }//fin del método

    //Metodo validar si contraseña está vacía y coincide con la contraseña anterior

        function ValidarConfContra(obj){
          if (obj.value=='') {
              if ((document.all)||(document.getElementById)) {
                  obj.style.borderColor = '#D90038';

                    document.getElementById('botone6').style.display = 'block';
                    document.getElementById('botonc6').style.display = 'none';
                    document.getElementById('boton').disabled=true;
                    document.getElementById('mensaje_pass2').innerHTML = 'Confirme contraseña';
                    return false;

              }//fin del if
          }else{
            if ((document.all)||(document.getElementById)) {

                        var contra1 = document.getElementById('password1').value;
                        var contra2 = document.getElementById('password2').value;
                        document.getElementById('password2').disabled=false;

                          if(contra1===contra2){
                            obj.style.borderColor = '#028000';
                            document.getElementById('botone6').style.display = 'none';
                            document.getElementById('botonc6').style.display = 'block';
                            document.getElementById('boton').disabled=false;
                            return true;
                          }else{
                            obj.style.borderColor = '#D90038';
                            document.getElementById('botone6').style.display = 'block';
                            document.getElementById('botonc6').style.display = 'none';
                            document.getElementById('mensaje_pass2').innerHTML = 'Las contraseñas no coinciden';
                            document.getElementById('boton').disabled=true;
                            return false;

                          }

              }//fin del if superior
            }//fin del else
        }//fin del método
