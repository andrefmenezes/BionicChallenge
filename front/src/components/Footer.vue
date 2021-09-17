 <template>
 <div >

<footer class=" container-footer bg-gradiente">
      <div class="social-icons">
       <a href="https://www.facebook.com/" target ="blank" ><font-awesome-icon :icon="['fab', 'facebook']" /></a>
        <a href="https://www.linkedin.com/company/bionicvideo/" target ="blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
          <a href="https://www.instagram.com/" target ="blank" ><font-awesome-icon :icon="['fab', 'instagram']" /></a>
         
      </div>
      <p class="copy">
     Bionic Video
      </p>

   </footer>
 </div>
 </template>

 <script>
 export default {
   name: 'Footer',
   props: {
    
   }
 }
</script>

<style>
a{
     text-decoration: none;
 }
 
 .container-footer{
    width: 100%;
     float: left;
     padding: 3% 4%;
     text-align: center;  
bottom: 0;
left: 0;
margin-top:10%
 }
 .bg-gradiente{
     background: linear-gradient(to right, #e68232 ,#645a50);
 }
   .social-icons a{
         font-size:1.5em ;
         color: rgba(255, 255, 255, 0.7);
         margin-right: 3%;
     }
     .social-icons a:hover{
        color: rgb(255, 255, 255);
     }
    .social-icons a:last-child{
         margin-right: 0;
     }
    
      
     @media screen and (max-width: 768px){
      .container-footer{
    width: 100%;
     float: left;
     padding: 3% 4%;
     text-align: center;  
bottom: 0;
left: 0;
margin-top:30%
 }
  

     }
     @media screen and (min-width: 960px){
        
       }
       @media screen and (min-width: 1280px){
    
       }
</style>