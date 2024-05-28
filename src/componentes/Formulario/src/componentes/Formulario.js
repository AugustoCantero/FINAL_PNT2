
export default {
  name: 'src-componentes-formulario',
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
        password: null
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
    enviar() {
      const datos = {...this.formData}
      console.log(datos)

      this.listarInscripto(datos)
      this.formData = this.getInicialData()
      this.formDirty = this.getInicialData()
    },
    listarInscripto(datos){
      this.inscriptos.push(datos)
    }
  }
}


