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
