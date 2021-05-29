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

const puestos = (equipos) =>
  equipos
    .map(
      ({
        asignado: {
          empleado: { puesto },
        },
      }) => puesto
    )
    .filter((puesto, index, puestos) => puestos.indexOf(puesto) === index);

const edadMedia = (equipos) =>
  equipos
    .map(
      ({
        asignado: {
          empleado: { edad },
        },
      }) => edad
    )
    .reduce(
      (acumulador, edad, index, edades) => edad / edades.length + acumulador,
      0
    );

const equiposPorEdad = (equipos) =>
  equipos.sort(
    (equipo1, equipo2) =>
      equipo1.asignado.empleado.edad - equipo2.asignado.empleado.edad
  );
