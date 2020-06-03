import Knex from "knex";

export async function seed(knex: Knex) {
  return await knex("points_items").insert([
    {
      point_id: 1,
      item_id: 1,
    },
    {
      point_id: 1,
      item_id: 2,
    },
    {
      point_id: 1,
      item_id: 5,
    },
    {
      point_id: 1,
      item_id: 6,
    },
    {
      point_id: 2,
      item_id: 2,
    },
    {
      point_id: 2,
      item_id: 3,
    },
    {
      point_id: 2,
      item_id: 4,
    },
  ]);
}
