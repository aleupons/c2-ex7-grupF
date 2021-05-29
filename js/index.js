const equiposMayoresEdad = (equipos , edad) =>
equipos.filter((equipo) => equipo.asignado.empleado.edad >= 18);
console.log(equiposMayoresEdad);
