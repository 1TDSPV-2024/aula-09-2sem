
import styled from "styled-components"

export const MeuH1 = styled.h1`
    background-color: blueviolet;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    width: 80%;
    border: 2px solid #0f0;
`

export const Header = styled.header`
  background-color: #4CAF50;
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 1.5em;
`

// Estilizando o Footer
export const Footer = styled.footer`
  background-color: #333;
  padding: 10px;
  text-align: center;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
`

export const MainContent = styled.main`
  padding: 20px;
  margin-top: 60px; // Espaço para o Header
  margin-bottom: 40px; // Espaço para o Footer
`

// Estilizando o contêiner do menu
export const Nav = styled.nav`
  background-color: #333;
  padding: 10px;
`

// Estilizando a lista de itens do menu
export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`

// Estilizando o item de link
// export const MenuLink = styled.a`
//   color:#fff;
//   text-decoration: none;
//   padding: 10px 20px;
//   display: block;
// `
// Estilizando o item de lista
export const MenuItem = styled.li`
  display: inline;
  &
  a{
    color:#fff;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
  }
  
`

export const MinhaTabela = styled.table`
  border-collapse:collapse;
  border: 2px solid #ff0000;
  margin:0 auto;
  width: 70vw;
  font-size:24px;

  & a{
    text-decoration:none;
    color:#fff;
  }

  &
   thead{
    background-color:#514f4f;
     &
      th{
        border:2px solid #ff0000;
        color:#343030;
        text-align:left;
      }
   }

   &
    tbody{
      background-color:#514f4f;
      color:#fff;
       &
        td{
          border:2px solid #ff0000;
          text-align:center;
        }
    }

    &
      tfoot{
        background-color:#514f4f;
        text-align:center;
        color:#fff;
      }

      & tr:nth-child(odd){
        background-color:#e0aeae;
        color:#262525;
      }

      & tr:nth-child(even){
        background-color:#3a3636;
        color:#b8b4b4;
      }

      & tr:hover{
        background-color:#706a6a;
        color:#232121;
      }

`