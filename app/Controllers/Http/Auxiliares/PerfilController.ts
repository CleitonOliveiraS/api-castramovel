import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Perfil from 'App/Models/Auxiliares/Perfil'

export default class PerfilControladorsController {
  public async index({ request }: HttpContextContract) {
    const { nome, id } = request.qs()
    const perfil = await Perfil.query((qb) => {
      if (nome) {
        qb.where('nome', 'like', `%${nome}%`)
      }
      if (id) {
        qb.where('id', id)
      }
    }).orderBy('id', 'desc')
    return perfil
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['nome'])
    const perfil = await Perfil.create(data)
    return perfil
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
