# Servidor WEB con ExpressJS

### Para instalar los paquetes necesarios usar:

``` npm install ```

### Para usar en local:

``` npm run dev ``` or ``` npm start ```

### Para ejecutar con el template engine pug, verifique que este presente el parametro pug en package.json

``` node index.js pug ``` y ``` npx nodemon index.js pug ```

### Para ejecutar con el template engine handlebars, verifique que este presente el parametro hbs en package.json

``` node index.js hbs ``` y ``` npx nodemon index.js hbs ```

### Para ejecutar con el template engine EJS, verifique que este presente el parametro ejs en package.json

``` node index.js ejs ``` y ``` npx nodemon index.js ejs ```

### Si queres ver solo al servidor sirviendo archivos html usar

``` node index.js html ``` y ``` npx nodemon index.js html ```

### Resumen de HTML puro:
Se puede servir HTML o crear un engine propio, pero es una tarea bastante grande, comparado con los que hay en el mundo del template engine

### Resumen de PUG:
Lo mejor: Se puede meter mucha logica dentro del codigo HTML y la configuración en el servidor es minima.
Lo peor: Hay que aprender la forma en que se escribe el HTML dentro de sus vistas

### Resumen de Handlebars (HBS):
Lo mejor: Minimo cambios en el HTML, rapida implementación.
Lo peor: Configuración mas extensa y que no tiene casi logica dentro del HTML, aunque esto se puede ser como una ventaja ya que se obliga a llevar la logica al controller.

### Resumen de EJS:
Lo mejor: Se puede embeber JS dentro del HTML, configuración super limpia y simple. Manejo de inclusiones mediante include esto hace que el codigo sea simple.
Lo peor: Hay que tenes mucho cuidado con la notación especial para que el codigo EJS no de error al compilar a HMTL.

# Resumen Final:
Al conocer recien los 3 template engine por primera vez, diria que EJS es el mejor, pero PUG es mucho mas popular y muchas empresas lo usan. Asi que me quedaria con EJS primero y con PUG en segundo lugar