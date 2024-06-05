import axios from "axios";

const url = 'https://66562f2f9f970b3b36c490cd.mockapi.io/api/usuarios/'



export const getAll = async () => {
    try {
        const { data: usuarios } = await axios.get(url)
        return usuarios
    }
    catch(error) {
        console.error("Error usuarios GET:", error);
        return []
    }
}

export const post = async usuario => {
    try {
        const { data: usuarioGuardado } = await axios.post(url, usuario)
        return usuarioGuardado
    }
    catch(error) {
        console.error("Error usuarios POST:", error);
        return {}
    }
}

export const put = async (id, usuario) => {
    try {
        const { data: usuarioActualizado } = await axios.put(url+id, usuario)
        return usuarioActualizado
    }
    catch(error) {
        console.error("Error usuarios PUT:", error);
        return {}
    }
}

export const del = async id => {
    try {
        const { data: usuarioEliminado } = await axios.delete(url+id)
        return usuarioEliminado
    }
    catch(error) {
        console.error("Error usuarios DELETE:", error);
        return {}
    }
}