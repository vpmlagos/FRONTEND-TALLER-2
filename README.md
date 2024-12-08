# Proyecto Clínica Privada

El repositorio contiene la página web desarrollada utilizando HTML, CSS, Bootstrap y el preprocesador SASS.

## Instrucciones de Ejecución

Para visualizar el proyecto, simplemente abre el archivo `index.html` en tu navegador.

### Ejecución en Modo Desarrollo

Para ejecutar el proyecto en modo desarrollo, sigue estos pasos:

1. **Instalar SASS**:

   Si no tienes SASS instalado, primero necesitas instalarlo globalmente usando el siguiente comando:

```
  npm install -g sass
  npm install bootstrap
  sass src/sass/main.scss dist/style.css
```

```
/Proyecto-Hospital-Privado
├── index.html
├── equipo.html
├── contacto.html
├── reservas.html
├── package-lock.json
├── package.json
├── README.md
├── node_modules
│   └── ...
├── src
│   ├── img
│   │   └── ...
│   ├── js
│   │   └── medicos.json
│   │   └── reservas.js
│   ├── sass
│   │   └── abstracts
│   │          └──_mixins.scss
│   │          └──_variables.scss
│   │   └── base
│   │          └──_reset.scss
│   │   └── components
│   │          └──_buttons.scss
│   │          └──_cards.scss
│   │          └──_carousel.scss
│   │   └── layout
│   │          └──_navbar.scss
│   │   └── pages
│   │          └──_home.scss
│   │   └── themes
│   │   └── vendors
│   │          └──_bootstrap.scss
│   │   └── main.scss
│   ├── style
│   │   └── homeStyle.css
├── dist
│   └── style.css
│   └── style.css.map
```


## PROCESO DE RESERVAS

El proceso principal comienza con la página **index.html**, donde aparece destacado el botón RESERVAR CITA, este botón lleva a la página **reserva.html**. Ahí se puede ver una columna con los médicos disponibles y un botón "Reservar cita" este botón gatilla una serie de prompts destinados a recopilar información personal como:

1. Nombre
2. Email 
3. Teléfono
4. Médico

### FUNCIONES

La función ***solicitarDatosUsuario*** muestra una serie de prompts al usuario para recopilar la información requerida. Una vez que el usuario introduce los datos, la función pasa esos valores a la función validarDatosUsuario 


La función ***validarDatosUsuario*** para comprobar si la información es válida. La validación incluye:

    Nombre: Verifica que no esté vacío.
    Email: Verifica que sea un correo electrónico válido (debe contener el símbolo @).
    Teléfono: Verifica que el teléfono tenga una longitud adecuada y sea un número válido.

Si los datos son válidos, la reserva se muestra en la consola; si no lo son, se muestra un mensaje de error y se solicita al usuario que intente de nuevo.

Las variables locales (declaradas dentro de una función) solo están accesibles dentro de esa función. En el caso de esta aplicación, las variables como nombre, email, telefono, y medico son locales a la función solicitarDatosUsuario, y no se pueden acceder fuera de ella.

Las variables globales, como validarDatosUsuario o cualquier otra función definida en el script, están disponibles para todo el documento HTML, ya que no están encapsuladas dentro de ninguna función.

Operador de Comparación (==, ===): Se usa para verificar si dos valores son iguales.

    Ejemplo: email.includes('@') verifica si el email contiene el símbolo @.

Operador Lógico (&&): Se usa para comprobar que varias condiciones sean verdaderas al mismo tiempo.

    Ejemplo: if (typeof email === 'string' && email.includes('@')) verifica que el email sea una cadena de texto y contenga el @.

Operadores de Asignación (=): Usados para asignar valores a las variables.

    Ejemplo: let nombre = prompt("¿Cuál es tu nombre?"); asigna el valor ingresado por el usuario a la variable nombre.


Uso del Debugger

El debugger es una herramienta poderosa para realizar un seguimiento detallado del flujo de ejecución del código. Puedes usar el debugger en tu código JavaScript para pausar la ejecución en un punto específico y examinar el estado de las variables y la pila de llamadas.

Cómo usarlo:

    Inserta debugger; en el lugar donde quieras pausar el código.
    Abre las herramientas de desarrollo del navegador (F12 o Ctrl + Shift + I en la mayoría de los navegadores).
    Ve a la pestaña de "Consola" o "Debugger".
    La ejecución del código se detendrá en el punto donde insertaste debugger, lo que te permitirá inspeccionar las variables y el flujo de ejecución.


    El bloque try/catch se utiliza para manejar errores en el código. El bloque try contiene el código que puede generar un error, mientras que el bloque catch captura el error y permite manejarlo adecuadamente.

Cómo funciona:

    try: Intenta ejecutar el código dentro de este bloque.
    catch: Si ocurre un error dentro del bloque try, el flujo de ejecución se detiene y se pasa al bloque catch, donde se puede manejar el error.
    finally: Se ejecuta independientemente de si ocurrió o no un error, y es útil para tareas de limpieza.