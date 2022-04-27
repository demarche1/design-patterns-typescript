# Builder - Creational (Criação)

# Intenção oficial

- Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações.

# Destilando a intenção

- O padrão sugere a separação do código que cria e o código que usa o objeto.
- Trata da criação de objetos complexos (complexos de verdade).
  - Contrutores complexos
  - Composição de varios objetos(composite)
  - Algoritmo de criação do objeto complexo
- Permite a criação do objeto em etapas
- Permite method chaining
- O objeto final pode variar de acordo com a necessidade
- É um padrão complexo

# Estrutura
[Ver UML](https://github.com/demarche1/design-patterns-typescript/blob/master/src/creational/builder/diagrams/Builder.png)

# Aplicabilidade

Use o Builder quando:

- Use o Builder quando a criação do objeto se torna complexa
- Use o Builder quando quiser que o código seja capaz de gerar diferentes representações do mesmo objeto


# Consequências

O que é bom ou ruim no Builder:

<strong>Bom:</strong>

  - Separa criação de utilização de objetos
  - O cliente não precisa criar objetos diretamente
  - O mesmo código pode construir objetos diferentes
  - Ajuda na aplicação dos princípios SRP e OCP

<strong>Ruim:</strong>

  - O código final pode se tornar muito complexo
