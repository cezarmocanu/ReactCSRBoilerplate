const CRUD = (router, model, middleware) => {
  router.get(
    "/",
    [
      ...(middleware && middleware.all ? middleware.all : []),
      ...(middleware && middleware.get ? middleware.get : []),
    ],
    async (req, res) => {
      await model.findAll().then((result) => {
        return res.status(200).json(result);
      });
    }
  );

  router.get(
    "/:id",
    [
      ...(middleware && middleware.all ? middleware.all : []),
      ...(middleware && middleware.get ? middleware.get : []),
    ],
    async (req, res) => {
      const { id } = req.params;
      await model.findAll({ where: { id } }).then((result) => {
        return res.status(200).json(result);
      });
    }
  );

  router.post(
    "/",
    [
      ...(middleware && middleware.all ? middleware.all : []),
      ...(middleware && middleware.post ? middleware.post : []),
    ],
    async (req, res) => {
      const newEntity = Object.keys(model.rawAttributes)
        .filter((key) => key !== "id" && req.body[key] !== undefined)
        .reduce((result, key) => ({ ...result, [key]: req.body[key] }), {});
      await model.create(newEntity).then(() => {
        return res.status(200).json(newEntity);
      });
    }
  );

  router.put(
    "/:id",
    [
      ...(middleware && middleware.all ? middleware.all : []),
      ...(middleware && middleware.put ? middleware.put : []),
    ],
    async (req, res) => {
      const { id } = req.params;
      const values = Object.keys(model.rawAttributes)
        .filter((key) => key !== "id" && req.body[key] !== undefined)
        .reduce((result, key) => ({ ...result, [key]: req.body[key] }), {});
      await model.update(values, { where: { id } }).then((result) => {
        return res.status(200).json(result);
      });
    }
  );

  router.delete(
    "/:id",
    [
      ...(middleware && middleware.all ? middleware.all : []),
      ...(middleware && middleware.delete ? middleware.delete : []),
    ],
    async (req, res) => {
      const { id } = req.params;
      await model.destroy({ where: { id } }).then((result) => {
        return res.status(200).json(result);
      });
    }
  );
};

module.exports = CRUD;
