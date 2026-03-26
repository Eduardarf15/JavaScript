# Aula de DOM: Revisão e Aprendizados  
**Por: G. Guanabara**

---

## O que é DOM

**DOM** significa **Document Object Model** (*Modelo de Objeto do Documento*).  

Ele é a forma como o navegador **representa o HTML da sua página** como uma estrutura de **árvore de elementos**, permitindo que o JavaScript **acesse e modifique a página dinamicamente**.

Em outras palavras, o DOM é a **ponte entre o HTML e o JavaScript**, tornando a página interativa.

---

## Principais funcionalidades do DOM

- **Acessar elementos:**  
  ```javascript
  var titulo = document.getElementById('titulo');

  Document
 ├── h1
 │    └── "Olá"
 └── p
      └── "Texto"