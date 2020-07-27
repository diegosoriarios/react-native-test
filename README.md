## Exercício

Para completar esse exercício você deve desenvolver um aplicativo social que contenha as seguintes páginas:

---

## Bibliotecas
- <strong>Axios</strong> - Para fazer as requisições http
- <strong>React Navigation</strong> - Para fazer a navegação entre telas
- <strong>React Native Image Picker</strong> - Para fazer a seleção das imagens
- <strong>React Native Vector Icons</strong> - Para icons
- <strong>Redux</strong> - Para gerenciamento de estados

---

## Paginas

### Login
Na pagina de login o usuário informa a imagem do avatar, nome, email e descrição, essa informação é salva no estado e pode ser alterada na pagina de perfil.

### Página Inicial
Na pagina inicial escolhi utilizar uma flatlist por trazer uma lista pronta com várias funcionalidades necessárias, como chamar uma função quando chegar no final da lista.
Sempre que a lista chega no final ela faz requisições de novas imagens.

### Perfil do Amigo
Ao clicar em algum item da lista na pagina inicial o usuário é redirecionado para o perfil do usuário, que é passado por parametro, onde é mostrado os detalhes e possui uma FlatList com as imagens do usuário funcionando da mesma forma que na pagina inicial, porém em 3 fileiras.

### Perfil
Utiliza o Form para alterar os dados do usuários.

---

## Components
- <strong>Custom Button</strong> - Recebe o texto a ser mostrado e a função para ser executada
- <strong>Custom Input</strong> - Recebe a referencia, o valor, o placeholder, a função que altera o valor, o numero de linhas do input e o proximo input para ser focado ao pressionar Enter
- <strong>Form</strong> - Recebe todos os valores necessários do Form, como nome, email, descrição e imagem, assim como suas funções de alteração
- <strong>Icon Link</strong> - Recebe o nome do icone a ser mostrado e a rota a ser redirecionada
- <strong>List Item e Grid Item</strong> - Recebem o item a ser renderizado
- <strong>Image Choose</strong> - Recebe a imagem atual mostrada e a função para alterar a imagem

---

## Rotas
- <strong>Splashscreen</strong>
- <strong>Login</strong>
- <strong>Home</strong>
- <strong>Settings</strong>
- <strong>Profile</strong>
- <strong>Chat</strong>
