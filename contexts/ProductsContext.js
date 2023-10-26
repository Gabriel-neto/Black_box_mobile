import { createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(false);

  const openForm = () => {
    setForm(true);
  };
  const closeForm = () => {
    setForm(false);
  };

  const addProduct = (nome, qtd) => {
    console.log(qtd)
    if (nome != "" && (qtd.length) != 0) {
      const newProduct = { nome, qtd };
      setProducts([...products, newProduct]);
      closeForm();
    }
  };
  const contextoProduto = {
    form,
    openForm,
    closeForm,
    products,
    addProduct,
  };
  return (
    <ProductsContext.Provider value={contextoProduto}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
export { ProductsContext };
