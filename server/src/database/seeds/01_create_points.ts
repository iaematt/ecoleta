import Knex from "knex";

export async function seed(knex: Knex) {
  return await knex("points").insert([
    {
      image:
        "https://images.unsplash.com/photo-1573481078935-b9605167e06b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      name: "Big Box",
      whatsapp: "61987654321",
      email: "contato@bigbox.com.br",
      latitude: -15.8242763,
      longitude: -48.0307622,
      city: "Águas Claras",
      uf: "DF",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      name: "Pão de Açucar",
      whatsapp: "61987654321",
      email: "contato@paodeacucar.com.br",
      latitude: -15.8241924,
      longitude: -48.0307622,
      city: "Águas Claras",
      uf: "DF",
    },
  ]);
}
