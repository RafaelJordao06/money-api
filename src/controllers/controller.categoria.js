import prismaClient from "../services/database.js"

const Listar = async (request, response) => {

    const categorias = await prismaClient.categoria.findMany();

    return response.json(categorias)
}

export default { Listar }