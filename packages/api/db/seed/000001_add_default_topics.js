exports.seed = async knex => {
    await  knex("topic").del()

    await knex("topic").insert([
        { name: "uncategorised", description: `the "limbo" topic` },
        { name: "general", description: "knowledge for everyone" }
    ])
}