import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'games';

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.string('platform').notNullable();
      table.string('slug').notNullable();
      table.unique(['platform', 'slug']);
      table.date('released_at').nullable().index();

      table.timestamp('created_at').nullable();
      table.timestamp('updated_at').nullable();
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
