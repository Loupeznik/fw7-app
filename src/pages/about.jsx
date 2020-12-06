import React from "react";
import {
  Page,
  Appbar,
  Block,
  BlockTitle,
  BlockFooter,
  Link,
} from "framework7-react";

export default () => (
  <Page name="about">
    <Appbar>
      <div className="left" />
      <div className="right">
        <p className="navbar-text">O aplikaci</p>
      </div>
    </Appbar>
    <BlockTitle large>Katalog elektroniky 2020 - O aplikaci</BlockTitle>
    <Block strong>
      <p>
        Aplikace <i>Katalog elektroniky</i> byla vytvořena v rámci předmětu
        A5MTE (Mobilní technologie) na FAI UTB ve Zlíně.
      </p>
      <p>
        Součástí aplikace jsou například možnost zobrazení a vyhledávání
        produktů, třídění produktů dle kategorií nebo zobrazení uživatelského
        profilu.
      </p>
      <p>
        Hybridní aplikace pracuje na bázi JavaScriptu, přesněji{" "}
        <Link href="https://reactjs.org" external>
          Reactu
        </Link>{" "}
        a{" "}
        <Link href="https://framework7.io" external>
          Frameworku 7
        </Link>
        .
      </p>
      <p>
        Celý zdrojový kód je taktéž dostupný na{" "}
        <Link href="https://github.com/Loupeznik/fw7-app" external>
          GitHubu
        </Link>
        .
      </p>
    </Block>
    <BlockFooter>©2020, Dominik Žárský</BlockFooter>
  </Page>
);
