# João Ignore — três direções para a landing

Abra `site/comparar.html` para ver Frequência Fantasma, Arquivo dos Não Encontrados e Atlas da Madrugada. É um site estático: o comparador e as três páginas não precisam de instalação nem compilação. Para testar por HTTP a partir da raiz: `python -m http.server 8765 --directory site`.

- `site/assets/priors-data.js`: exportação do HTML fornecido, com custos originais em USD e pontuações preservadas.
- `site/assets/priors-chart.js`: gráfico compartilhado, escala logarítmica, seletor de moeda e fornecedor, rota eficiente e tabela acessível.
- `site/assets/dados.json`: metadados da Steam e das imagens públicas coletadas.
- `site/assets/avatar-youtube.jpg`: avatar público usado pelo canal.

O câmbio é uma referência fixa de 26/11/2026, da série 1 do Banco Central. O gráfico não representa preços brasileiros oficiais. Os espaços para a foto do João são temporários: não recebemos a foto escolhida para publicação.
