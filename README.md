# Mega Man X Custom Alerts for Stream Elements 

## Resumo
- Todo alerta enviado pelo Stream Elements, ativa a caixa de alertas customizada, escrevendo seu conteudo como uma máquina de escrever, com fade in e fade out, alterando os devidos campos de Usuário e Quantidades.


![Imagem do Projeto](https://i.imgur.com/kKVrnUz.png)

Video demonstrativo - https://www.linkedin.com/feed/update/urn:li:activity:7163169444784017408?originalSubdomain=pt

## Tecnologias Usadas

- `HTML`
- `CSS`
- `JavaScript`
- `JSON`
- `Twitch + Stream Elements APIs`

## Versões
- **1.0** - Integração Básica entre HTML / CSS / Javascript / JSON / API (tudo criado por mim, exceto o objeto usado na comunicação da API do StreamElements)
- **2.0** - Integração de FIELDS em JSON para usabilidade sem necessidade de alterar o código, com entradas simples para qualquer usuário, podendo customizar como quiser (cores, mensagens, imagens, sons, temporização).
- **3.0** - Refatoração para Obejtos, visando simplificação e redução de redundância.
- **3.1** - Inclusão de comunicação direta à API do Stream Elements para resgatar Nome, Quantidade e Mensagem de Item resgatado na Store.
- **4.0** - Adicionado uma API de Text-to-Speak usada pelo próprio Stream Elements, com 119 vozes disponíveis (entre idiomas e variações).
- **4.5** TBA - Nova refatoração em um Objeto mais conciso, com menos redundancias e mais objetividade.


## Explicação
- Sou muito fã de games retro, mas mais ainda de Mega Man, então quis trazer algo bem específico do jogo para minhas lives ficarem mais interativas.
- Construí a parte visual apenas com HTML / CSS / JS  / JSON Puros, usando Gradient Color Stop no texto em cada linha, visando adquirir o visual da Caixa de Diálogo de Mega Man X - SNES (1993).
- Usei o som original do jogo para as a inserção dos carácteres.
- Estudei a parte de Alertas da Stream Elements e como faria a ligação dos eventos nesse projeto.
- É possível escolher entre 14 cores diferentes, a duração dos alertas, seu atraso, sons, imagens ou vídeos, tudo individualmente.
- Inclusão de sons, imagens ou vídeos pelo usuário, com controle de volume, velocidade ou se quer deixar tudo nulo.

## Instalação

Instruções para rodar o projeto localmente na sua máquina. 

1. Clone o repositório:
   ```bash
   git clone https://github.com/stormizinhu/megaman-x-custom-alerts-widget-stream-elements.git

### © by Stormizinhu - 2024
