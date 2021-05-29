const equiposMayoresEdad = (equipos, edad) =>
  equipos.filter((equipo) => equipo.asignado.empleado.edad >= edad);

const equiposProvincia = (equipos, provincia) =>
  equipos.filter(
    (equipo) =>
      equipo.asignado.provincia.toLowerCase() === provincia.toLowerCase()
  );
