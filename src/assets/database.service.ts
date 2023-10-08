import { Injectable } from '@angular/core';
import { CapacitorSQLite } from '@capacitor-community/sqlite';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  async crearBD() {
    try {
      await CapacitorSQLite.createConnection({ database: "usuariosBD", version: 1, encrypted: false, mode: "full" });
      await CapacitorSQLite.open({ database: "usuariosBD" });
      await CapacitorSQLite.execute({ 
        statements: `
          CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario TEXT, 
            nombre TEXT, 
            edad INTEGER, 
            correo TEXT, 
            password TEXT, 
            conductor BOOLEAN,
            viajes_realizados INTEGER DEFAULT 0,
            viajes_rechazados INTEGER DEFAULT 0,
            disponibilidad BOOLEAN DEFAULT TRUE
          );
        ` 
      });
    } catch (e) {
      console.error('Error al crear la base de datos:', e);
    }
  }

  async crearUsuario(usuario: any) {
    try {
      const sentencia = await CapacitorSQLite.run({
        statement: `
          INSERT INTO usuarios (usuario, nombre, edad, correo, password, conductor, viajes_realizados, viajes_rechazados, disponibilidad) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
        `,
        values: [usuario.usuario, usuario.nombre, usuario.edad, usuario.correo, usuario.password, usuario.conductor, 0, 0, true]
      });
      return sentencia;
    } catch (e) {
      console.error('Error al insertar usuario:', e);
      return null;
    }
  }

  async actualizarUsuario(usuario: any) {
    try {
      const sentencia = await CapacitorSQLite.run({
        statement: `
          UPDATE usuarios 
          SET usuario = ?, nombre = ?, edad = ?, correo = ?, password = ?, conductor = ?, viajes_realizados = ?, viajes_rechazados = ?, disponibilidad = ? 
          WHERE id = ?;
        `,
        values: [usuario.usuario, usuario.nombre, usuario.edad, usuario.correo, usuario.password, usuario.conductor, usuario.viajes_realizados, usuario.viajes_rechazados, usuario.disponibilidad, usuario.id]
      });
      return sentencia;
    } catch (e) {
      console.error('Error al actualizar usuario:', e);
      return null;
    }
  }
  
  async eliminarUsuario(id: number) {
    try {
      const sentencia = await CapacitorSQLite.run({
        statement: `DELETE FROM usuarios WHERE id = ?;`,
        values: [id]
      });
      return sentencia;
    } catch (e) {
      console.error('Error al eliminar usuario:', e);
      return null;
    }
  }
  
  async mostrarUsuarios() {
    try {
      const sentencia = await CapacitorSQLite.query({
        statement: `SELECT * FROM usuarios;`,
        values: []
      });
      return sentencia.values;
    } catch (e) {
      console.error('Error al consultar usuarios:', e);
      return null || []; // o retorna un array vacío;
    }
  }

  async mostrarUsuarioPorId(id: number) {
    try {
      const result = await CapacitorSQLite.query({
        statement: `SELECT * FROM usuarios WHERE id = ?;`,
        values: [id]
      });
      if (result.values && result.values.length > 0) {
        return result.values[0];
      } else {
        console.error('No se encontró ningún usuario con el ID especificado');
        return null;
      }
    } catch (e) {
      console.error('Error al consultar usuario por ID:', e);
      return null;
    }
  }
  
  async cambiarContrasena(nombreUsuario: string, correo: string, nuevaContrasena: string) {
    try {
        // Consulta para verificar la existencia del usuario con el nombre y correo proporcionados
        const resultado = await CapacitorSQLite.query({
            statement: `SELECT * FROM usuarios WHERE usuario = ? AND correo = ?;`,
            values: [nombreUsuario, correo]
        });

        // Si no se encontró un usuario que coincida, retornar error
        if (!resultado.values || resultado.values.length === 0) {
            return { exito: false, mensaje: 'Nombre de usuario o correo electrónico incorrectos.' };
        }

        const idUsuario = resultado.values[0].id;

        // Actualizar la contraseña del usuario en la base de datos
        const resultadoActualizacion = await CapacitorSQLite.run({
            statement: `UPDATE usuarios SET password = ? WHERE id = ?;`,
            values: [nuevaContrasena, idUsuario]
        });

        // Verificar si la actualización fue exitosa
        if (resultadoActualizacion && resultadoActualizacion.changes !== undefined && Number(resultadoActualizacion.changes) > 0) {
            return { exito: true, mensaje: 'Contraseña actualizada con éxito.' };
        }

        // Si llegamos a este punto, hubo un error al actualizar
        return { exito: false, mensaje: 'Error al actualizar la contraseña.' };

    } catch (e) {
        console.error('Error al cambiar la contraseña:', e);
        return { exito: false, mensaje: 'Error al cambiar la contraseña.' };
    }
  }
  
}