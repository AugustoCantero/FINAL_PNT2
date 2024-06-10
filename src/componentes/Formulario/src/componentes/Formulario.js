import axios from "axios"

export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
      inscriptos:[],
      nombreUsuario: null
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        email: null,
        password: null
      }
    },
    validarBotonEnvio() {
      return (!this.formData.email || !this.formData.password)
    },
    async enviar() {
      const datos = {...this.formData}
      console.log(datos)

      const usuarioNotas = await this.getUsuarioNotas(datos.email, datos.password)
      if (usuarioNotas !== null) {
        datos.notas = usuarioNotas || {notaMatematica: 'sin nota', notaLengua: 'sin nota', notaHistoria: 'sin nota'}
        this.nombreUsuario = usuarioNotas.nombre
        this.listarInscripto(datos)
        this.formData = this.getInicialData()
        this.formDirty = this.getInicialData()
      } else {
        alert('Usuario no encontrado, email o contraseña incorrectos')
      }
      
    },
    listarInscripto(datos){
      this.inscriptos = []
      this.inscriptos.push(datos)
    },
    async getUsuarioNotas(email, password) {
      try {
        const response = await axios.get(`https://66562f2f9f970b3b36c490cd.mockapi.io/api/usuarios?email=${email}`)
        const usuario = response.data.find(user => user.email === email && user.password === password)
        return usuario ? {
          nombre: usuario.nombre,
          notaMatematica: usuario.notaMatematica || 'sin nota',
          notaLengua: usuario.notaLengua || 'sin nota',
          notaHistoria: usuario.notaHistoria || 'sin nota'
        } : null
      } catch (error) {
        console.log('Error al obtener las notas del usuario ', error)
        return null
      }
    }
  }
}


