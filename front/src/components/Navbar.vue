
<template>
  <div class="navbar">
    <header class="cabecalho container">
        <a class="logo" href="https://www.bionicvideo.com.br/" target ="blank" ><img src="../assets/fotos/logo-bionic.png" > </a>
         
</header> 
  </div>
</template>

<script>
export default {
  name: 'Navbar',
   components: {
    
  }
}
</script>


<style >
body{
    background-color: #f5f5f5 !important;
}
.navbar{
   
    width: 100%;
    top: 0%;    
    background-color: white ;
}
.container{
    width: 100%;
    height: 12vh;
    display: flex;
   justify-content: center;

}
.logo{    
   display: flex;
    align-items:  center;
 justify-content: center;
}
.logo img{
    width: 166px; 
           height: 40px;  
}

    /*mobile*/

    
     @media screen and (max-width: 736px){
      
      .logo{                     
            margin-top: 0;
                
                          
       
      }
     
    }

     
</style>
