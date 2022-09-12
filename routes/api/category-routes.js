const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
    const categoryData = await Category.findAll()
    // TODO Finish this route ask about the include
      // be sure to include its associated Products
  } catch (err){
    res.status(500).json(err)
  };
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err){
    res.status(400).json(err);
  };
});

//TODO Test route
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const categoryData = await Category.update({
      where: {
        id: req.params.id
      }
    },
    {
      category_name: req.body
    });
    if(!categoryData){
      res.status(404).json({message: 'No category found with this id'});
      return;
    }
  } catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try{
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!categoryData){
      res.status(404).json({message: 'No category found with this id'});
      return;
    }
  } catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
