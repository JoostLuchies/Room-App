import { UserRole } from './user-role';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  role: UserRole;
}
