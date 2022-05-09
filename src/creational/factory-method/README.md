# Prototype - Creational (Criação)

# Intenção oficial

- Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O Factory Method permite adiar a intanciação para as subclasses.

# Sobre Factory Method

- É um padrão de projeto de criação(lida com criação de objetos)
- Oculta a lógica de instanciação do código cliente. O método fábrica será responsável por instanciar as classes desejadas
- É obtido através de herança, o método fábrica pode ser criado ou sobrescrito por subclasses
- Dá flexibilidade para o código cliente permitindo a criação de novas factories sem a necessidade de alterar o código já escrito(OCP)
- Pode user parâmetros para determinar o tipo dos objetos a serem criados ou os parâmetros a serem enviados ao objetos sendo criados

# Estrutura
[Ver UML](https://github.com/demarche1/design-patterns-typescript/blob/master/src/creational/factory-method/diagrams/Factory-Method.png)

# Aplicabilidade

Use o Factory Method quando:

- Use o factory method quando não souber com certeza quais os tipos de objetos o seu código vai precisar
- Use o factory method para permitir a extensão de suas factories para a criação de novos objetos(isso vai ajudar a aplicar o OCP)
- Use o factory method para desacoplar o código que cria as classes do código que usa as classes(SRP)
- Use o factory method para dar um hook ás subclasses para que elas decidam a lógica para de criação de objetos
- Use o factory method para eliminar duplicação de código na criação de objetos

# Consequências

O que é bom ou ruim no Factory Method:

<strong>Bom:</strong>

  - Ajuda a aplicar o Open/Closed Principle. O código vai estar aberto para extensão
  - Ajuda na aplicação do Single Responsability Principle. Separa o código que cria do código que usa o objeto
  - Ajuda no desacoplamento do seu código

<strong>Ruim:</strong>

  - Se usado sem necessidade, pode causar uma explosão de subclasses. Será necessário uma classe ConcreteCreator para cada ConcreteProduct.
