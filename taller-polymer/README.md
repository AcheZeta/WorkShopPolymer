# \<taller-polymer\>



## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.


### Polymer

#### Custom Elements. 
- Autonomos (Por Devs con sus manitas) y Build-in (Estandar, huelen a limón) 
- Separados por un dash. 
- Registro Unico.
- Elementos deben cerrarse.  
- Definición síncrona.

#### Shadow DOM API (Ninja)
- Encapsula elementos.
- Los elementos no tienen alcance global. 
- Scoped CSS.
- Shadow Host: La etiqueta personalizada 
```
<mi-componente></mi-componente>
```

### Custom Element con Style con CSS variables.

Las variables CSS se pueden usar fuera del contexto de elementos personalizados, simplemente como una forma de evitar la dispersión de datos de estilo en una hoja de estilo.
Un autor de CSS asigna valores a una propiedad personalizada y luego usa la función var() para usar estos valores en otra parte de la hoja de estilo.

- ```:host ```
PseudoSelector 
Se refiere al Web Component

- Variables funcionan como Propiedades

- Se declara: ```var(--component-name-propiedad, estilo)```
- Ejemplo: ```var(--polymer-component-color, red)```

#### HTML Import
Importar componente mediante rutas relativas.
```link rel="import" href="component-1.html"```


