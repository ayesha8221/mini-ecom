// import express
import express from "express";
import bodyParser from "body-parser";

// app.use(bodyParser.json()); 


// import function from controller
import { showProducts, showProductById, createProduct, deleteProduct, updateProduct} from "../controllers/products.js";
  
// init express router
const router = express.Router();
  
// Get All Product
router.get('/products', showProducts);
  
// Get Single Product
router.get('/products/:id', showProductById);
  
// Add New Product
router.post('/products', createProduct);

// Delete a product
router.delete('/products/remove/:id', deleteProduct);

// Update a product
router.put("/products/:id", updateProduct);

  
// export default router
export default router;