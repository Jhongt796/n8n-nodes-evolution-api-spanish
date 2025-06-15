documento:

Este paquete es un fork del repositorio original `n8n-nodes-evolution-api` y existe únicamente para ofrecer una versión en español de los nodos, ya que n8n aún no soporta internacionalización (i18n) en los Community Nodes.

**No se da soporte ni se reciben issues en este repositorio.**

Para cualquier consulta, soporte o nuevas funcionalidades, dirígete siempre al repositorio original: https://github.com/oriondesign2015/n8n-nodes-evolution-api

---

Observación de este documento:
Este documento sirve para la Definición de Operaciones que deben aparecer
en cada Recurso, incluyendo la creación de nuevos campos para cada Operación

 ██████╗ ██████╗ ███████╗██████╗  █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
██╔═══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
██║   ██║██████╔╝█████╗  ██████╔╝███████║   ██║   ██║██║   ██║██╔██╗ ██║
██║   ██║██╔═══╝ ██╔══╝  ██╔══██╗██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
╚██████╔╝██║     ███████╗██║  ██║██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝

Operación = Funciones/Opciones de cada Recurso (Instancia, Mensajes, Integración, Conversación, Perfil y Grupo)

"Lo que cada Recurso presentará al ser seleccionado"

Ejemplo:
Instancias:
  • Crear instancia;
  • Crear instancia con proxy;
  • Conectar instancia;

Cada Recurso añadido tendrá uno de estos para listar las opciones/funciones de cada Recurso




	███████╗██╗     ███████╗███╗   ███╗███████╗███╗   ██╗████████╗███████╗
	██╔════╝██║     ██╔════╝████╗ ████║██╔════╝████╗  ██║╚══██╔══╝██╔════╝
	█████╗  ██║     █████╗  ██╔████╔██║█████╗  ██╔██╗ ██║   ██║   ███████╗
	██╔══╝  ██║     ██╔══╝  ██║╚██╔╝██║██╔══╝  ██║╚██╗██║   ██║   ╚════██║
	███████╗███████╗███████╗██║ ╚═╝ ██║███████╗██║ ╚████║   ██║   ███████║
	╚══════╝╚══════╝╚══════╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝

Elementos = Los campos que aparecen en cada Operación

"Cada Operación (ej: Enviar mensaje de Texto) tiene campos que necesitan ser completados para hacer una solicitud"

Ejemplo:
Enviar Mensaje de Texto:
  • Instancia que va a enviar;
  • RemoteJid del destinatario;
  • Mensaje que va a ser enviado;
