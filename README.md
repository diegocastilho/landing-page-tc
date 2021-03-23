## Tecnologias utilizadas
<p>Para o desenvolvimento do projeto foram utilizadas:</p>
<ul>
<li>Html, Css e JavaScript e Jquery.</li>
<li>Não foi utilizado nenhum framework de css, ele foi todo desenvolvido do zero.</li>
<li>A biblioteca Owl Carousel para o desenvolvimento do carousel do blog.</li>
<li>O pré-processador de css Sass.</li>
<li>Foi ultilizado também o Gulp para otimização de task minificando e juntando tando o css quanto o javascript.</li>
</ul>

<br>

## Estruturação do projeto
<p>Projeto está estruturado da seguinte forma:</p>
<ul>
<li>Para a parte de HTML, como é apenas um página, o projeto está no index.html.</li>
<li>Os scripts Javascript estão localizados da pasta src/js. </li>
<li>Na pasta /vendor estão todas as bibliotecas necessárias para o desenvolvimento: Owlcarousel e Jquery.</li>
<li>Todas as imagens desde logos até os favicons estão na pasta src/images.</li>
<li>E na pasta src/scss estão os arquivos de estilo separados de forma estrutural para facilitar a manutenção e desenvolvimento do mesmo.</li>
</ul>

<br>

## Como acessar o projeto
<p>Link para acessar o projeto online: <a target="_blank" href="https://diegocastilho.github.io/landing-page-tc/">https://diegocastilho.github.io/landing-page-tc/</a> </p>

<br>

## Como alterar o projeto
<p>Baixe o projeto e não altere diretamente o css, use os arquivos do scss para fazer as alterações, para isso 
siga os seguintes passos:</p>

<ul>
<li>Instale o Nodejs : <a target="_blank" href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a></li>
<li>Depois do Node instalado abra o terminal na pasta raiz do projeto e execute: <code>npm install</code> ele irá instalar todas as dependências que está no arquivo package.json</li>
<li>Depois disso execute o comando: <code>gulp</code> ele irá executar a task default dentro do arquivo gulpfile.js e fará com que qualquer alteração da pasta js ou scss, seja minificado e colocado automaticamente dentro da pasta ./dist.</li>
</ul>

<br>

## Considerações Finais

<p>Foi desenvolvido tudo que foi proposto no documento, inclusive consumir os dados de uma api para popular o Blog e também a validação do e-mail para envio do formulário, segui a risca o layout passado no Figma, mas fiz alguns ajustes no mobile na resolução 320px, pois no que foi passado o mobile tava em 414px.</p>
<br>

## Layout final


![Alt text](layout.png?raw=true "Layout")

