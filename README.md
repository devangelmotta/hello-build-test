# Test project


El proyecto se encuentra en la estructura general como

  - Componentes
  - Containers
  - Secciones
  
-- Los componentes son completamente tontos y reusables, la mayoría construidos con styled-ementes y solo reciben props.

-- Los Containers albergan la lógica de datos representacionales y llamadas a recursos. Los contenedores siguen el patron de baja acoplabilidad por tanto se intenta que cada uno de ellos sea independiente y contenga en sí mismo todo lo necesario para funcionar. Es por eso que se usa la característica de Redux de inyección de reductores y de esa forma mantener el código dinámico y separado. Los Containers también mantienen su propio estilo aislado en caso de tenerlo. 

-- Secciones: Son simplemente más componentes con la diferencia que son menos reusables, son producto directo de la combinación de otros altamente reusables. El motivo de esto es que, al mantener ese patrón, la app puede crecer sin ver cómo pierde rápidamente el orden y escalabilidad: los componentes agnósticos se mantienen aislados, y componentes más complejos y particulaes se mantienen como una sesión específica de una screen, sea por ejemplo un navbar específico. Sessiones se mantiene dentro del Container correspondiente.

Se ha usado además Redux y Saga para el manejo de estado y petición de servicios. La ventaja de Saga es que permite mantener las peticiones lejos de los componenetes de interfaz. También se usó immer, selector y memo para economizar cómputo tras las renderizaciones. 

Adicional se usó GraphQL y Apollo para consumir el API de Github. La lógica de petición se encuentra dentro del Container "Github" y no en App.

Otras tecnologías usadas: Context Provider se usú para elaborar un formulario totalmente dinámico y escalable, siendo flexible a agregar cuantos campos se requiera mientras maneja la lógica de datos de entrada dinámicamente. Además se uso: useState y useEffect entre otros hooks.

Github dio algunos problemas que no me esperaba por motivo de estar haciendo peticiones con datos sensibles desde el cliente. Para corregir este problema sin usar servicios externos modifiqué el servidor en el que corre React para que acepte la petición y la procese desde el backend. Además he modificado una pequeña CLI para crear componentes en styled-componets o componentes funcionales. La CLI está hecha en pug y es realmente simple pero útil.Vea la carpeta internals.

En la carpeta utils encontrajará las funciones para simular el login en localstorage entre otras funcionalidades.

Planeaba añadir soporte intl pero almenteblemente no he tenido el tiempo suficiente para ello por lo que dejé una pequeña demostración en la screen Login.








### Instalación


Clone el repositorio:

First Tab:
```sh
 git clone --depth https://github.com/devangelmotta/hello-build-test.git <FRIENDLY_NAME>
```
Instale dependencias: 
```sh
 yarn
```

Para levantar en modo dev ejecute :
```sh
 yarn start 
```
En el package.json podrá todas los comandos disponibles.

