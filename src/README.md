# O que são padrões de projeto

<ul>
  <li>
    São <strong style=color:green;> soluções elegantes para problemas conhecidos </strong> recorrentes no desenvolvimento de seftweres que foram utilizados e testados no passado e continuam relevantes nos dias atuais;
  </li>
  <br>
  <li>
    Foram catalogados e popularizados pelo livro <strong style=color:green;>"Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos"</strong>(os padrões da GoF, de 1994/95 - por Erich Gamma, Richard Helm, Ralph Jhonson, Jhon Vlissides)
  </li>
  <br>
  <li>
    <strong style=color:green;>São dividos em 3 categorias</strong>:
    <ol>
      <li>
        <strong style=color:green;>Creational</strong>: Abstract Factory, Builder, Factory Method, Prototype e Singleton;
      </li>
      <li>
        <strong style=color:green;>Structural</strong>: Adapter, Bridge, Composite, Decorator, Façade, Flyweight e Proxy;
      </li>
      <li>
        <strong style=color:green;>Behavioural</strong>: Chain of responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template method e Visitor.
      </li>
    </ol>
  </li>
  <br>
  <li>
    São <strong style=color:green;>APENAS SUGESTÕES</strong> de softweres que podem ser aplicadas a qualquer linguagem de programação
  </li>
<ul>

# Beneficios e problemas

<strong style=color:green;>O que é bom</strong>:
- Você não precisa reinventar a roda
- Padrões universais facilitam o entendimento do seu código
- Evita refatoração desnecessária
- Ajuda na reutilização de código (DRY - Don't Repeat Yourself)
- Abstrai e nomeia partes particulares do projeto
- Ajuda aplicação dos principios <strong style=color:green;>SOLID</strong>
- Facilitam a criação de testes unitários
#
<strong style=color:red;>O que é ruim</strong>:

- Alguns padrões podem ser complexos até que você os compreenda
- Muito código para atingir um objetivo simples
- Podem trazer otimizações prematuras para seu código (YAGNI - You Ain't Gonna Need It)
- Se usados incorretamente, podem atrapalhar ao invés de ajudar


