import { CancionDto } from "./CancionDTO";


export interface GeneroDTO{
    id:number;
    tipo:string;
    Lista:CancionDto[];
    Admin:UsuarioAdmin;
    mostrarCanciones?: boolean;
}
export interface UsuarioAdmin{
    nombre :String ;
    correo :String ;
    contraseña:String ;
    autenticacion:boolean ;
}
