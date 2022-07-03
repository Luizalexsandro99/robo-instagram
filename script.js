let contador = 0;
let a = document.querySelectorAll('._acas');
       
    a.forEach((v, i)=>{
        setTimeout(()=>{
           if(!v.classList.contains('._acat')){
               v.click();
               contador++;
               console.log("Você já seguiu " + contador + " pessoas")
            }else{
               console.log("Você já segue este usuario")
           }
               
       }, i *  20000)
   })