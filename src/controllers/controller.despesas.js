import prismaClient from "../services/database.js"

const Listar = async (request, response) => {

    const config = {
        include: {
            categoriaDetalhe: true
        },
        orderBy: {
            id: "desc"
        }
    }

    const despesas = await prismaClient.despesas.findMany(config);

    return response.json(despesas)
}

const ListarId = async (request, response) => {

    const config = {
        include: {
            categoriaDetalhe: true
        },
        where: {
            id: Number(request.params.id)
        }
    }

    const despesas = await prismaClient.despesas.findMany(config);

    return response.json(despesas[0])
}

const Inserir = async (request, response) => {

    try {
        const { descricao, categoria, valor } = request.body
        const despesas = await prismaClient.despesas.create({
            data: {
                descricao,
                categoria,
                valor
            }
        });

        return response.status(201).json(despesas)
    } catch (error) {
        return response.status(500).json(error)
    }
}

const Editar = async (request, response) => {
    try {
        const { descricao, categoria, valor } = request.body
        const id = request.params.id
        const despesas = await prismaClient.despesas.update({
            where: {
                id: Number(id)
            },
            data: {
                descricao,
                categoria,
                valor
            }
        });

        return response.json(despesas)
    } catch (error) {
        return response.status(500).json(error)
    }
}

const Excluir = async (request, response) => {
    try {
        const id = request.params.id
        const despesas = await prismaClient.despesas.delete({
            where: {
                id: Number(id)
            }
        });

        return response.json(despesas)
    } catch (error) {
        return response.status(500).json(error)
    }
}

export default { Listar, ListarId, Inserir, Editar, Excluir }