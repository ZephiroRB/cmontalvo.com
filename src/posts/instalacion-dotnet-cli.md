---
title: "Instalación .Net CLI y Creación de 'Hola Mundo'"
date: "2020-09-04"
---

[.Net (CLI)](https://dotnet.microsoft.com/download/dotnet-core) La interfaz de línea de comandos para aplicaciones .Net, es una herramienta multiplataforma esencial para la creación, desarrollo, compilación y publicación en aplicaciones .NET. ¿Qué quiero decir con 'esencial'? Sencillo, cualquier persona o herramienta que quiera desarrollarse en la plataforma de Microsoft debe utilizar esta herramienta. Es la primera capa de desarrollo. 

Visual Studio Community, o la version de pago ya incluye el CLI, si no puedes descargarlo desde [aqui](https://dotnet.microsoft.com/download/dotnet-core/3.1) y elegimos el sistema operativo que usamos y descargamos la version 64bits o 32bits segun corresponda.

![Versiones](https://res.cloudinary.com/carlosmontalvo/image/upload/v1599372173/instaladores_qbplxw.png)

Para este caso he descargado  Windows x64, cuando se complete la descarga, ejecute el instalador y complete los pasos para instalar .NET en su máquina.

![Pantalla de Instalación](https://res.cloudinary.com/carlosmontalvo/image/upload/v1599373888/instalador_ovefno.png)

Cuando se complete el instalador, abra un nuevo símbolo del sistema y ejecute el comando dotnet. Esto verificará que .NET esté correctamente instalado y listo para usar.

![Verificación](https://res.cloudinary.com/carlosmontalvo/image/upload/v1599374325/verificacion_evrfco.png)

Ahora que tiene .NET instalado, vamos a mostrar una tabla con los comandos basicos que trae `dotnet`.

La estructura seria la siguiente

`dotnet <command> <argument> <option>` 

Todos los comandos comienzan con el controlador llamado `dotnet`. El controlador inicia la ejecución del comando especificado. Después de `dotnet`, podemos proporcionar un comando (también conocido como verbo) para realizar una acción específica. 

Cada comando puede ir seguido de argumentos y opciones.

| Sintaxis | Descripción |
| --- | ----------- |
| `dotnet new` | Crea un proyecto .NET, por ejemplo `dotnet new template -o carpeta` donde debemos usar un `template` que es el tipo de aplicación .NET que queremos crear, si desea una lista completa de los templates disponibles ejecutar `dotnet new -i .\` y `carpeta` el nombre de a caperta a crear|
|`dotnet run`| Ejecuta tu aplicación.|
|`dotnet restore` | Restaura todos las dependencias que tenga su aplicación.|
| `dotnet build` | Compila tu applicación para validar que no tiene errores.|
| `dotnet test` | Ejecuta los tests de tu aplicación|
| `dotnet publish` | Publica tu aplicación|
| `dotnet pack` | creates a Nuget Packages.|


Creemos su primera aplicación, con el comando `dotnet new console -o firstapp_cmontalvo` donde **console** es una tipo de aplicación en .NET que se ejecuta desde terminal.

![Creamos primera App](https://res.cloudinary.com/carlosmontalvo/image/upload/v1599374648/crear_qlmttj.png)

Donde *firstapp_cmontalvo* es la carpeta donde se creara el proyecto, ingresamos con `cd firstapp_cmontalvo` y abrimos el proyecto con el editor preferido, en este caso vscode, digitamos `code .`

![Abrimos el proyecto con vscode](https://res.cloudinary.com/carlosmontalvo/image/upload/v1599375065/vscode_j6e9dt.png)

Abrimos el archivo Program.cs nos situaremos en la linea con el texto  `Console.WriteLine("Hello World");` y reemplazamos "Hello World" por "Hola Mundo".

![Reemplazamos Hello World](https://res.cloudinary.com/carlosmontalvo/image/upload/v1599375414/cambiamos_hello_word_oocwgo.png)

Guardamos el archivo, regresamos al simbolo de sistema y ejecutamos el comando `dotnet run` en la carpeta del proyecto, recibiremos como respuesta un Hola Mundo.

![Ejecuión dotnet run](https://res.cloudinary.com/carlosmontalvo/image/upload/v1599375604/Ejecutamos_gcclwt.png)

¡Felicitaciones, ha creado y ejecutado su primera aplicación .NET!

En un siguiente articulo enseñare a crear un proyecto ASP.NET CORE con el CLI.