# FindAMorty - Rick y Morty Memory Game

Este es un proyecto web que utiliza HTML, CSS y JavaScript para consumir datos de la API de Rick y Morty y crear un juego de memoria con cartas de personajes de la serie. Los jugadores pueden poner a prueba su memoria emparejando personajes mientras disfrutan de la temática de Rick y Morty.

![Rick y Morty Memory Game](link_a_la_imagen.png)

## Características

- Visualiza las cartas de personajes de Rick y Morty.
- Juego de memoria con cartas de personajes.
- Puntuación para rastrear el rendimiento del jugador.
- Tema de Rick y Morty para una experiencia inmersiva.

## Uso

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/jbxss/findAMorty
```

2. Abre el archivo `index.html` en tu navegador web preferido.

3. Juega al juego de memoria emparejando las cartas de personajes haciendo clic en ellas.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript
- [API de Rick and Morty](https://rickandmortyapi.com/)

## Configuración de la API

Para personalizar qué personajes se muestran en el juego, puedes modificar la configuración de la API en el archivo `config.js`. Puedes ajustar el número de personajes y las características que deseas incluir.

```javascript
// config.js

const API_CONFIG = {
  API_URL: 'https://rickandmortyapi.com/api/character',
  NUM_CHARACTERS: 10, // Cambia este número según tus preferencias
};
```

## Contribuir

Si deseas contribuir a este proyecto, ¡estamos abiertos a colaboraciones! Puedes realizar un fork del repositorio, hacer tus cambios y enviar un pull request.

## Créditos

Este proyecto utiliza la API de Rick and Morty para obtener datos de personajes. Agradecemos a los creadores de la serie y a la comunidad que mantiene la API.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

---

¡Diviértete jugando el juego de memoria de Rick y Morty y explorando los personajes de la serie! Si tienes alguna pregunta o sugerencia, no dudes en contactarme. ¡Disfruta!