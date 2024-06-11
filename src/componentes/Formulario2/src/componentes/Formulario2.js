import { getAll, post } from "@/servicios/usuarios"

export default {
  name: 'src-componentes-formulario2',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
      inscriptos:[]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: null,
        edad: null,
        email: null,
        password: null,
        notaMatematica: null,
        notaLengua: null,
        notaHistoria: null
      }
    },
    validarBotonEnvio() {
      return (
        !this.formData.nombre || 
        this.formData.nombre.length < 5 || 
        this.formData.nombre.length > 15 
      ) ||  
      (!this.formData.edad || this.formData.edad < 18 || this.formData.edad > 120) || 
      !this.formData.email || 
      !this.formData.password
    },
    async agregarUsuario() {
      try {
        const usuarios = await getAll()
        const usuarioExistente = usuarios.find(usuario => usuario.email === this.formData.email);

        if(!usuarioExistente){
          const datos = {...this.formData}
        console.log(datos)

        await post({...this.formData})
        

        this.listarInscripto(datos)
        this.formData = this.getInicialData()
        this.formDirty = this.getInicialData()      
        }else{
          alert('El usuario con este mail ya existe')
        }

          
        
      } catch (error) {
        console.log('Error al agregar usuario ', error)
      }   
    },
    listarInscripto(datos){
      this.inscriptos.push(datos)
    }
    
  }
}


