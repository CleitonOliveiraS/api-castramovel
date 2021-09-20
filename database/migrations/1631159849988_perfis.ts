import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Perfis extends BaseSchema {
  protected tableName = 'perfis'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
