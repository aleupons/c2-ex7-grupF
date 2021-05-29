const equiposMayoresEdad = (equipos, edad) =>
  equipos.filter((equipo) => equipo.asignado.empleado.edad >= edad);

const equiposProvincia = (equipos, provincia) =>
  equipos.filter(
    (equipo) =>
      equipo.asignado.provincia.toLowerCase() === provincia.toLowerCase()
  );

const provincias = (equipos) =>
  equipos
    .map(({ asignado: { provincia } }) => provincia)
    .filter(
      (provincia, index, provincias) => provincias.indexOf(provincia) === index
    );
