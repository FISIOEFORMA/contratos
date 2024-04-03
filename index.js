<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DexZ Bot</title>
    <!-- Favicon -->
    <link rel="icon" href="https://telegra.ph/file/ff1a792d6b491f260a2b4.jpg" type="image/x-icon" />
    <!-- Font Awesome icons -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <!-- Core theme CSS -->
    <link rel="stylesheet" href="style.css">
    <!-- Script do ElfSight -->
    <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
    <style>
        /* Estilo para a caixa de mensagem */
        html, body {
            margin: 0;
            padding: 0;
        }

        .welcome-message {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8); /* Fundo semi-transparente preto */
            z-index: 9999; /* Para garantir que a mensagem esteja acima de todos os outros elementos */
            display: none; /* Por padrão, a mensagem estará oculta */
        }

        /* Estilos adicionais para a caixa de mensagem */
        .welcome-message-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }

        .welcome-message h2 {
            margin-bottom: 20px;
            color: #FFFFFF;
        }

        .welcome-message button {
            padding: 10px 20px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .button-container {
            text-align: center;
            margin-top: 20px;
        }

        .button-container .link {
    /* margin: 0 10px; */
    display: block; /* Alteração aqui */
    text-decoration: none;
    color: white;
    padding: 10px 20px;
    border: 2px solid white;
    border-radius: 5px;
}

        #hashtag {
            text-align: center;
            margin-top: 20px;
        }

    <!-- Parallax Pixel Background Animation -->
    <section class="animated-background">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </section>
    <!-- End of Parallax Pixel Background Animation -->

    </style>
</head>
<body>
    <!-- Caixa de mensagem de boas-vindas -->
    <div class="welcome-message" id="welcomeMessage">
        <div class="welcome-message-content">
            <h2>Olá terrestre🛸</h2>
            <p style="color: white;">Aqui Você terá informações extras sobre o universo DexZ Bot.</p>
            <button onclick="closeWelcomeMessage()">Fechar</button>
        </div>
    </div>

    <!-- Áudio de fundo -->
    <audio id="backgroundAudio" loop>
        <source src="musga.mp3" type="audio/mpeg">
        Seu navegador não suporta o elemento de áudio.
    </audio>

    <!-- Animação de fundo com estrelas -->
    <section class="animated-background">
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    </section>

<style>
    /* Define a animação de rotação */
    @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    /* Aplica a animação ao ícone quando o mouse passar sobre o botão */
    .link:hover .fa-handshake {
        animation: rotate 2s infinite linear;
    }
</style>

    <!-- Restante do conteúdo do seu site -->
    <div id="profilePictureContainer">
        <a id="profilePicture" href="#popup">
            <img src="https://telegra.ph/file/69908863c2da186c45f24.jpg" alt="Profile Picture">
        </a>

        <div class="overlay" id="popup">
            <div class="popup">
                <div class="popup-photo">
                    <a href="https://telegra.ph/file/739dc388fc45e87b50b80.jpg" target="_blank">
                        <img src="https://telegra.ph/file/739dc388fc45e87b50b80.jpg" alt="Profile Picture">
                    </a>
                </div>
                <div class="popup-quote">
                    Olá, meu nome é Felipe Fidelo, e sou desenvolvedor de DexZ Bot. Para quem tá chegando agora, saiba que esse projeto existe desde 2020, sempre inovando e buscando atingir o melhor. DexZ está hospedado em um servidor pago,para mantê-lo online 24 horas por dia. Caso queira dar uma ajudinha e colaborar para a existência e funcionamento do bot, você pode fazer um donate😉.

Por: Felipe Fidelo📌
                </div>
                <a class="popup-close" onclick="history.back()">&times;</a>
            </div>
        </div>
    </div>

    <div id="userName">
        DexZ Bot MD | Clique em mim! ⬆️
    </div>

    <div id="links" class="button-container">
        <a class="link" href="https://instagram.com/fidelo34k" target="_blank">
            <i class="fab fa-instagram">&nbsp;</i>Meu criador
        </a>
<a class="link" href="https://viny.netlify.app" target="_blank">
    <i class="fas fa-handshake"></i> Parceiros
</a>
        <a class="link" href="https://whatsapp.com/channel/0029VaWs2bgBA1eoyCd0Ef3b/100" target="_blank">
            <i class="fab fa-whatsapp">&nbsp;</i>Acesse DexZ Bot | Não é a Luzia🤣
        </a>



        <a class="link" href="#" onclick="copyPixKey()">
    <i class="fas fa-donate"></i>Donate
</a>


    </div>

    <div id="hashtag">
        Beijo na bunda de quem leu!
    </div>

    <!-- Função para copiar a chave Pix -->
    <script>
        // Função para exibir a mensagem de boas-vindas
        function showWelcomeMessage() {
            document.getElementById("welcomeMessage").style.display = "block";
        }

        // Função para fechar a mensagem de boas-vindas e iniciar a música
        function closeWelcomeMessage() {
            document.getElementById("welcomeMessage").style.display = "none";
            document.getElementById("backgroundAudio").play();
        }

        // Exibir a mensagem de boas-vindas quando o site for carregado
        window.onload = function() {
            showWelcomeMessage();
        };

        // Função para copiar a chave Pix
        function copyPixKey() {
            var pixKey = "fa0cbdb8-6617-491f-94e9-9bba31183e58";
            navigator.clipboard.writeText(pixKey)
                .then(() => {
                    alert("Chave Pix copiada para a área de transferência!");
                })
                .catch(err => {
                    console.error('Erro ao copiar a chave Pix: ', err);
                });
        }
    </script>
</body>
</html>
