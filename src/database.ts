import  Dexie  from 'dexie';

export class AppDB extends Dexie{

    usuarios : Dexie.Table<IUsuario,number>;
    mensajes : Dexie.Table<IMensaje,number>;
    
    constructor(){
        super("AppDB");

        this.version(1).stores({
            usuarios: '++id,nombre,primerApellido,segundoApellido,email,telefono',
            mensajes: '++id,contenido,status,usuarioEmisor,usuariorecpetor,fechaEnvio,fechaRecibido'
        });

        this.usuarios.mapToClass(Usuario);
        this.mensajes.mapToClass(Mensaje);
    }
}

export class Usuario implements IUsuario{
    id                   ?:number;
    nombre                :string;
    primerApellido        :string;
    segundoApellido       :string;
    email                 :string;
    telefono              :string;
    accesos               :number;
    ultimoAcceso          :string;
    imagenNombre          :string;
    imegenPath            :string;

    constructor(
        nombre                :string,
        primerApellido        :string,
        segundoApellido       :string,
        accesos              ?:number,
        ultimoAcceso         ?:string,
        email                ?:string,
        telefono             ?:string,
        imagenNombre         ?:string,
        imegenPath           ?:string,
        id                   ?:number
    ){
        this.nombre             = nombre;
        this.primerApellido     = primerApellido;
        this.segundoApellido    = segundoApellido;
       
        if(accesos) this.accesos            = accesos;
        if(ultimoAcceso) this.ultimoAcceso  = ultimoAcceso ;        
        if(email) this.email                = email;
        if(telefono) this.telefono          = telefono;
        if(imagenNombre) this.imagenNombre  = imagenNombre;
        if(imegenPath) this.imegenPath      = imegenPath;        
        if(id)  this.id                     = id;  
    }

    save(){
        return db.usuarios.add(this);
    }

    static all(){
        return db.usuarios.orderBy("id").reverse().toArray();
    }
}

export class Mensaje implements IMensaje{
    id?                   :number;
    contenido             :string;
    status                :string;
    usuarioEmisor         :number;
    usuariorecpetor       :number;
    fechaEnvio            :string;
    fechaRecibido         :string;

    constructor(
        contenido           :string,
        status              :string,
        usuarioEmisor       :number,
        usuariorecpetor     :number,
        fechaEnvio?         :string,
        fechaRecibido?      :string,
        id?                 :number
    ){
        this.contenido          = contenido;
        this.status             = status;
        this.usuarioEmisor      = usuarioEmisor;
        this.usuariorecpetor    = usuariorecpetor;
        
        if(fechaEnvio) this.fechaEnvio          = fechaEnvio;
        if(fechaRecibido) this.fechaRecibido    = fechaRecibido;
        if(id)  this.id                         = id;  
    }

    save(){
        return db.mensajes.add(this);
    }

    static all(usuarioEmisor){
        return db.mensajes
                .orderBy("id")
                //.where("usuarioEmisor").above(usuarioEmisor)
                .toArray();
    }

}

export interface IUsuario{
    id?                   :number;
    nombre                :string;
    primerApellido        :string;
    segundoApellido       :string;
    email                 :string;
    telefono              :string;
    accesos               :number;
    ultimoAcceso          :string;
    imagenNombre          :string;
    imegenPath            :string;
}

export interface IMensaje{
    id?                   :number;
    contenido             :string;
    status                :string;
    usuarioEmisor         :number;
    usuariorecpetor       :number;
    fechaEnvio            :string;
    fechaRecibido         :string;
    conversacion          :number;
}

export interface IConversacion{
    id?                   :number;
    puerto                :number;
    tipo                  :number;
    fecha                 :string;
    grupoId               :number;
}

export interface IArchivo{
    id?                   :number;
    mensajeId             :number;
    tipo                  :number;
    nombre                :string;
    path                  :string;
}


export interface IGrupo{
    id?                   :number;
    pid                   :number;
    nombre                :string;
    cursoId               :number;
}



export let db = new AppDB();