UPDATE mytable SET data_name = $2, data_price = $3, data_image = $4 WHERE id=$1

-- for multiple updates together, do it like a create
-- update products
-- set data_name =$2, data_description = $3
-- where product_id = $1;

-- const update = (req, res, next) => {
--  const db = req.app.get("db");
--  const { params, body } = req;
--  db.update_product([params.id, body.data_name, body.data_description])
--    .then(response => res.status(200).send(response))
--    .catch(err => res.status(500).send(err));
-- };