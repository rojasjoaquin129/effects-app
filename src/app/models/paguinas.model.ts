import { Usuario } from './usuario.model';
export interface Paginas {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Usuario[];
  support: Support;
}

export interface Support {
  url: string;
  text: string;
}
