function revelar(){
    const img = document.getElementById('imgJogador');
    const nome = document.getElementById('Nome');
    const rank = document.getElementById('Rank');
    const dataNas = document.getElementById('Data_Nas');
    const altura = document.getElementById('Alutra');
    const posicao = document.getElementById('Posição '); 

    
    img.src = 'vinicius_junior.png';

 
    nome.innerHTML = 'Vinícius José Paixão de Oliveira Júnior <span id="Rank" class="badge text-bg-secondary">9,5</span>';
    
    dataNas.innerHTML = '<strong>Nascimento:</strong> 12/07/2000 (25 anos)';
    altura.innerHTML = '<strong>Altura:</strong> 1,76 m';
    posicao.innerHTML = '<strong>Posição:</strong> Ponta-esquerda / Atacante';

   
    const elementos = [nome, dataNas, altura, posicao];
    
    elementos.forEach(el => {
        el.classList.remove('placeholder');
        el.classList.add('card-text');
    });
    
  
    const rankBadge = document.getElementById('Rank');
    if (rankBadge) {
        rankBadge.classList.remove('placeholder');
    }
}    
