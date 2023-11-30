/*function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
};

document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}; 
document.querySelector('.tecla_clap').onclick = tocaSomClap;*/

function tocaSom(idElementoAudio){
   const elemento = document.querySelector(idElementoAudio);

   if(elemento && elemento.localName === 'audio'){
        elemento.play();
   }
   else {
    console.log('Elemento ou seletor invalido não encontrado');
   }

};

const listaDeTeclas = document.querySelectorAll('.tecla');
 
//enquanto

/*let contador = 0;

while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    };
   
    contador = contador +1;
    
    //console.log(contador)

}*/

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function(event){
        if(event.code === 'Enter' || event.code === 'Space'){
            tecla.classList.add('ativa');
        }
        
        
    };

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    };
}


