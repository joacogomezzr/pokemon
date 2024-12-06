import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private localStorageKey = 'users'; 

  constructor() {}

  /**
   * Registra un nuevo usuario.
   * @param user .
   * @returns 
   */
  registerUser(user: { email: string; password: string }): boolean {
    const users = this.getAllUsers();
    if (users.find((u) => u.email === user.email)) {
      return false; // Ya existe un usuario con ese email.
    }
    users.push(user);
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
    return true;
  }

  /**
   * Verifica las credenciales del usuario.
   * @param email Email ingresado.
   * @param password Contraseña ingresada.
   * @returns boolean Indica si las credenciales son válidas.
   */
  loginUser(email: string, password: string): boolean {
    const users = this.getAllUsers();
    return users.some((u) => u.email === email && u.password === password);
  }

  /**
   * Obtiene todos los usuarios almacenados.
   * @returns Array de usuarios.
   */
  private getAllUsers(): { email: string; password: string }[] {
    const users = localStorage.getItem(this.localStorageKey);
    return users ? JSON.parse(users) : [];
  }
}
