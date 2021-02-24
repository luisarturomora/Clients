export interface IClient {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
}

export class Client implements IClient {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;

  constructor(
    id: number = null,
    nombre: string = '',
    apellido: string = '',
    telefono: string = '',
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }
}