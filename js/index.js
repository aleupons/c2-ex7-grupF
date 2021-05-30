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
      (acumulador, edad, _index, edades) => edad / edades.length + acumulador,
      0
    );

const equiposPorEdad = (equipos) =>
  equipos.sort(
    (equipo1, equipo2) =>
      equipo1.asignado.empleado.edad - equipo2.asignado.empleado.edad
  );

const equiposPorTipo = (equipos, tipo) => {
  const equiposPorTipo = [];
  const tiposEquipo = equipos
    .map(({ tipo }) => tipo)
    .filter((tipo, index, tipos) => tipos.indexOf(tipo) === index);
  for (const tipoEquipo of tiposEquipo) {
    const equiposDeUnTipo = { tipo: "", equipos: [] };
    for (const equipo of equipos) {
      if (equipo.tipo === tipoEquipo) {
        equiposDeUnTipo.equipos.push(equipo);
      }
    }
    equiposDeUnTipo.tipo = tipoEquipo;
    equiposPorTipo.push(equiposDeUnTipo);
  }
  return tipo;
};
const equiposTipoLocalidad = (equipos, tipo, localidad) =>
  equipos.filter(
    (equipoTipo) =>
      equipoTipo.tipo.toLowerCase() === tipo &&
      equipoTipo.asignado.poblacion.toLowerCase() === localidad.toLowerCase()
  );
const resumenEquipos = (equipos, id, poblacion, provincia) =>
  equipos.map((equipos) => [
    id === equipos.id,
    poblacion === equipos.asignado.poblacion,
    provincias === equipos.asignado.provincia,
  ]);
