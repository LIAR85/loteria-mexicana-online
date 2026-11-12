# 🎴 Lotería Mexicana Online

Juego multijugador privado en tiempo real con Node.js, Express y Socket.IO.

## Desarrollo

```bash
npm install
npm start
```

Abre http://localhost:3000. Ejecuta `npm test` para revisar la lógica de las 54 cartas, cartones y modalidades de victoria.

## Características

- Salas con código e invitados desde celular o computadora
- 54 cartas tradicionales representadas por emojis provisionales
- Cartones aleatorios de 4 × 4
- Modalidades: línea, esquinas y cartón lleno
- Anfitrión que canta las cartas y validación del ganador

**Estado:** versión inicial de pruebas; sin pagos, premios ni apuestas. El servidor debe desplegarse en un hosting Node.js con WebSockets para utilizarse por Internet. Las salas se guardan en memoria y se pierden al reiniciar el servidor.

## Ilustraciones de las 54 cartas

La interfaz busca imágenes en `public/cartas/01.jpg` hasta `public/cartas/54.jpg` según el número oficial de cada carta. Si una ilustración todavía no está disponible, muestra un emoji provisional. Mantén la numeración con dos dígitos y no cambies los identificadores de `game.js`.

Para añadir las cartas, descomprime el paquete de imágenes dentro de la raíz del proyecto, de modo que cada imagen quede en `public/cartas/NN.jpg`. Después guarda los archivos en GitHub mediante un commit. No es necesario cambiar los nombres de las cartas ni sus reglas.

Las ilustraciones de barajas comerciales pueden estar protegidas por derechos de autor. Revisa los permisos de uso antes de hacer pública la versión ilustrada.
