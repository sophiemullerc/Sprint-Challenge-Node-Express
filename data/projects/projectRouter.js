const express = require('express');
const router = express.Router();
const projectModel = require('.../data/helpers/projectModel.js');

// api/projects

outer.get('/', (req, res) => {
       projectModel
        .get()
        .then(projects => {
          res.status(200).json(projects);
         })
        .catch(error => {
          res.status(500).json(`Error catching the projects: ${error}`);
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

      projectModel
        .get(id)
        .then(project => {
          res.status(200).json(project);
        })
        .catch(error => {
          res.status(500).json(`Error to get the information: ${error}`);
        });
});

router.get('/:id/actions', (req, res) => {
    const { id } = req.params;

      projectModel
        .getProjectActions(id)
        .then(actions => {
          res.status(200).json(actions);
        })
        .catch(error => {
             res
            .status(500)
            .json(`Error to receive the action: ${error}`);
         });
});

router.post('/', (req, res) => {
      projectModel
      .insert(req.body)
      .then(response => {          res.status(200).json(response);
    })
      .catch(error => {
        res.status(500).json(`There was an error POSTing: ${error}`);
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const update = req.body;

  projectModel
    .update(id, update)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  projectModel
    .get(id)
    .then(response => {
      project = { ...response[0] };
      projectModel
        .remove(id)
        .then(response => {
          res.status(200).json(project);
        })
        .catch(error => {
          res.status(500).json(error);
        });
    })
    .catch(error => {
      res.status(404).json(`Error finding the project: ${error}`);
    });
});

module.exports = router;