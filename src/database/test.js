const Database = require("./db.js");

Database.then(async (db) => {
  //inserir dados na tabela
  /*await db.run(`
  INSERT INTO orphanages (
   lat, lng, name, about, whatsapp, images, instructions, opening_hours, open_on_weekends
  ) VALUES (
   "-22.8232878", "-43.0088399", "Lar das meninas", "Presta assitênciaa crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.", "21968745236", "https://images.unsplash.com/photo-1576024267263-70f1caffd6fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "Venha como se sentir a vontade e traga muito amor e paciência para dar.", "Horário das visitas das 8h até as 18h.", "0"
  );
 `) 

 //consultar dadod na tabela
 const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)
  */
  const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "1"');
  console.log(orphanages);

  // console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))

  //Deletar dado da tabela
  await db.run('DELETE FROM orphanages where id="4"');
});