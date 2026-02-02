# 💕 Site para Pedir a Volta da Ex

Um site romântico e personalizado para reconquistar o amor da sua vida! ✨

## 📁 Arquivos do Projeto

- `index.html` - Estrutura principal do site com todas as seções
- `style.css` - Estilos e design romântico com animações
- `script.js` - Funcionalidades: música, contagem regressiva, partículas

## 🎯 Estrutura do Site

O site é composto por várias seções emocionais:

1. **Contagem Regressiva** - Uma contagem de 10 segundos antes de revelar o conteúdo
2. **Intro Emocional** - Página inicial com convite para clicar
3. **Começo** - A história de como vocês se conheceram
4. **Por Que Eu Te Amo** - Cartões com razões do porquê você a ama
5. **Timeline** - Linha do tempo com memórias e fotos
6. **O Que Eu Aprendi** - Lições aprendidas com ela
7. **Qualidades Dela** - Carrossel com as melhores qualidades
8. **Nostalgia** - Memórias especiais e momentos marcantes
9. **Playlist** - Músicas que lembram ela
10. **Metas** - Planos e objetivos para o futuro
11. **Carta** - Uma carta manuscrita emocionate
12. **Promessas** - Compromissos para o futuro
13. **Pedido Final** - O grande pedido de volta!

## 🎨 Como Personalizar

### 1. Adicionar suas fotos

No arquivo `index.html`, procure os placeholders de foto:

```html
<div class="photo-frame">
    <span>📷</span>
    <p>Sua Foto Aqui</p>
</div>
```

Para adicionar sua foto:
```html
<div class="photo-frame">
    <img src="caminho-da-sua-foto.jpg" alt="Nossa foto" style="max-width: 100%; border-radius: 15px;">
</div>
```

### 2. Editar textos e mensagens

Todas as seções têm textos que podem ser editados no `index.html`. Procure por:
- `intro-text` - Texto de introdução
- `begin-text` - História do começo
- `reason-card` - Razões do porquê você a ama
- `timeline-content` - Memórias da timeline
- `letter-content` - Carta de amor
- `promise-card` - Promessas
- `proposal-text` - Pedido final

### 3. Alterar nomes e datas

Substitua os textos placeholders:
- Nomes (no início e no final da carta)
- Datas na timeline
- Lugares especiais
- Nomes de músicas

### 4. Editar a playlist

Na seção de playlist, adicione suas músicas:

```html
<div class="song-card">
    <span class="song-icon">🎵</span>
    <h3>Nome da Música</h3>
    <p>Artista - Por que essa música?</p>
    <button class="play-btn">▶️ Ouvir</button>
</div>
```

### 5. Adicionar/Remover metas

Edite a seção de metas:

```html
<div class="goal-item">
    <span class="goal-icon">🎯</span>
    <div class="goal-content">
        <h3>Sua Meta</h3>
        <p>Descrição da meta...</p>
    </div>
</div>
```

## ✨ Funcionalidades Especiais

### 🎵 Controle de Música
Botão flutuante no canto superior direito para tocar/parar música de fundo. Para funcionar, adicione uma música ao `index.html`:

```html
<audio id="bg-music" loop>
    <source src="sua-musica.mp3" type="audio/mpeg">
</audio>
```

### ⏰ Contagem Regressiva
Animação de entrada com contagem de 10 segundos antes de revelar o site.

### 💕 Corações Flutuantess
Corações animando no fundo, agora posicionados atrás de todo o conteúdo para não干扰 a leitura.

### ✨ Partículas de Brilho
Pequenas partículas brilhantes que adicionam magia ao ambiente.

### 📱 Design Responsivo
O site se adapta perfeitamente a celulares e desktops.

## 🚀 Como Visualizar

### Método 1 - Abrir diretamente
Basta abrir o arquivo `index.html` no seu navegador:

```bash
# No MacOS
open pedido-volta-ex/index.html

# No Windows
start pedido-volta-ex\index.html

# No Linux
xdg-open pedido-volta-ex/index.html
```

### Método 2 - Usando servidor local
```bash
cd pedido-volta-ex
npx serve
# ou
python -m http.server
```

## 📱 Compartilhamento

Para compartilhar com ela, você precisa hospedar o site:

### Opções de hospedagem gratuita:

1. **Netlify Drop** (Recomendado - mais fácil)
   - Acesse: https://app.netlify.com/drop
   - Arraste a pasta `pedido-volta-ex` para lá
   - Pronto! Vai gerar um link para compartilhar

2. **Vercel**
   - Acesse: https://vercel.com
   - Instale o Vercel CLI: `npm i -g vercel`
   - Na pasta do projeto: `vercel --prod`

3. **GitHub Pages**
   - Crie um repositório no GitHub
   - Faça upload dos arquivos
   - Ative GitHub Pages nas configurações

## 💡 Dicas para o Pedido

1. **Escolha o momento certo** - Envie o link quando ela estiver calma e disposta a conversar

2. **Seja genuíno** - Edite todos os textos com suas próprias palavras, mostrando seus sentimentos reais

3. **Use fotos significativas** - Escolha imagens que demonstrem bons momentos da relação

4. **Personalize a carta** - A carta é o coração do site, dedique tempo para写得 com carinho

5. **Prepare-se para a resposta** - Esteja pronto para aceitar qualquer resposta com maturidade

## 📋 Checklist de Personalização

- [ ] Trocar todas as fotos placeholders
- [ ] Editar a história do começo
- [ ] Preencher as razões do porque você a ama
- [ ] Completar a timeline com memórias reais
- [ ] Adicionar as qualidades dela
- [ ] Incluir músicas significativas
- [ ] Escrever uma carta personalizada
- [ ] Criar promessas verdadeiras
- [ ] Formular o pedido de volta
- [ ] Testar em celular e computador
- [ ] Hospedar e gerar o link de compartilhamento

## 🎉 Após Ela Aceitar!

O site tem uma celebração especial preparada! Configure o texto de sucesso no `script.js` para uma mensagem personalizada.

Boa sorte! Que seu amor seja reconquistado! 💕

---

Feito com ❤️ para reconquistar o amor da sua vida

