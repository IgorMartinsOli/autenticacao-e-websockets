import registrarEventoDocumento from "./registrarEventos/registrarEventoDocumento.js";
import registrarEventoInicio from "./registrarEventos/registrarEventosInicio.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  registrarEventoInicio(socket, io);
  registrarEventoDocumento(socket, io);

});
