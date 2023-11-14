import { GeneroDTO } from "./GeneroDTO";

export interface CancionDto{
    id: number;
    nombreCancion: string;
    autor: string;
    usuarioAdmin: UsuarioAdmin;
    genero: GeneroDTO;
}

export interface UsuarioAdmin{
    nombre :String ;
    correo :String ;
    contraseña:String ;
    autenticacion:boolean ;
}
