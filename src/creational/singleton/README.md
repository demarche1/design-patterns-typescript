# Intenção oficial

- Garantir que uma classe tenha somente uma instância no programa e fornercer uma fonte de acesso global para a mesma.

# Destilando a intenção
O Singleton é um padrão de projeto que tem a intenção de resolver dois problemas em uma aplicação:

  - Garantir que uma classe tenha somente uma instância no programa - isso é muito comum para programas que acessam recursos compartilhados, como  bases de dados, sistemas de arquivos, interfaces gráficas, spoolers de impressão, módulos de um programa e mais.
  - Fornecer um ponto de acesso global para a mesma - isso deixa o singleton muito parecido com variáveis globais, porque temos um único objeto, com acesso global, sendo usado por várias partes da aplicação.

Apesar de ser um dos padrões mais usados na atualidade, requer conhecimento e cuidado ao utilizá-lo. Um programador pode facilmente criar um Singleton que gera problemas de concorrência em um programa.

Note que o Singleton tem duas responsabilidades e isso quebra a regra do SRP (Single Responsibility Principle).

Em entrevista, anos após a criação do livro, Erich Gamma (um dos autores), mencionou seu interesse em remover o Singleton se fossem reescrever o livro na atualidade. Segundo ele, o uso de singleton quase sempre é sinal de problemas de design. [entrevista](https://www.informit.com/articles/article.aspx?p=1404056)

# Estrutura
[Ver UML](https://github.com/demarche1/design-patterns-typescript/blob/master/src/creational/singleton/diagrams/Singleton.png)

# Aplicabilidade

Use o singleton quando:
- Use o singleton quando uma classe precisa ter somente uma instância disponível em todo o seu programa;
- Use o singleton quando perceber que está usando variáveis globais para manter partes importantes do programa, como variáveis de configuração que são usadas por toda a aplicação.

# Consequências

O que é bom ou ruim nos Singletons:

<strong>Bom:</strong>

  - Acesso controlado por encapsulamento à instância única;
  - É possível permitir um número variável de instâncias (pode soar estranho, mas é possível criar um Singleton que permite n instâncias de uma classe);
  - É possível usar thead lock para garantir que duas partes do código não alterem o singleton simultaneamente;
  - Usa lazy instantiation, ou seja, o Singleton só será instanciado no momento do uso;

<strong>Ruim:</strong>


  - É mais difícil de testar;
  - Viola o princípio da responsabilidade única;
  - Requer tratamento especial em casos de concorrência;
