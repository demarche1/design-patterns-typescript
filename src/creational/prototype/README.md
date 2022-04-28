# Prototype - Creational (Criação)

# Intenção oficial

- Especificar os tipos de objetos a serem criados usando uma intância-protótipo e criar novos objetos pela cópia desse protótipos.

# Sobre JavaScript e TypeScript

- JS/TS são linguagens baseadas em protótipos
- Objetos estão diretamente ligados a outros objetos
- Você pode fazer um objeto "herdar" de outro
- A "herança" é obtida via <strong>delegação</strong>(um objeto delega algo para seu protótipo)
- Uma das maneiras mais simples para manipular o protótipo do um objeto é usando ```Object.create(prototypeObject) ```
- Também temos o custume de usar classes ou funções contrutoras para manipulação de protótipos (isso faz com que JS/TS pareçam estar usando o padrão orientado a objetos clássico)

# Visão geral do padrão prototype

- O tipo de objeto e ser criado é determinado pelo objeto protótipo
- É tipicamente utilizado para evitar a criação de objetos "caros"
- Ajuda a evitar explosão de subclasses
- Pode (ou não) manter um registro de objetos protótipos em objetos separados
- Geralmente é criado apenas com um método "clone" dentro do objeto protótipo
- O método clone pode gerar uma "shallow" ou "deep" copy do objeto protótipo
- Evita que o cliente conheça a classe que cria os objetos

# Estrutura
[Ver UML](https://github.com/demarche1/design-patterns-typescript/blob/master/src/creational/prototype/diagrams/Prototype.png)

# Aplicabilidade

Use o Prototype quando:

- Use o padrão prototype quando não precisar que seu código não dependa de classes concretas para criação de novos objetos
- Use o padrão quando quiser evitar exploão de subclasses para objetos muito similares
- Use o padrão prototype para evitar criação de objetos "caros"

# Consequências

O que é bom ou ruim no Prototype:

<strong>Bom:</strong>

  - Oculta classes concretas no código cliente
  - Ajuda na criação de objetos caros ou complexos
  - Evita a explosão de subclasses

<strong>Ruim:</strong>

  - Clonar objetos que tem referência para outros objetos pode ser super complexo
