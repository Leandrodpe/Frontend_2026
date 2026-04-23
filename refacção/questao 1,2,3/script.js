function gerarTabela(){

    const img = document.createElement('img');

   
    img.src = 'Tabela_Jogos.png'; 
    img.alt = 'Tabela de Jogos';
    img.style.display = 'block';
    img.style.marginTop = '20px';

 
    document.body.appendChild(img);

  
    document.getElementById('btnMostrar').disabled = true;}