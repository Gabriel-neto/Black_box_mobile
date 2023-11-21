import { createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [snackbarMessage, setSnackbarMessage] = useState(""); //SNACKBAR
  const [visibleSnackbar, setVisibleSnackbar] = useState(false); //SNACKBAR
  const [products, setProducts] = useState([]);
  const [indexProduct, setIndexProduct] = useState();
  const [form, setForm] = useState(false);
  const [reportValues, setReportValues] = useState({ qtdTotal: 0, custoTotal: 0, lucroPrevisto: 0, lucroVenda: 0 });


  const openForm = () => {
    setForm(true);
  };
  const closeForm = () => {
    setForm(false);
  };

  const addProduct = (nome, qtd, marca, precoCusto, precoVenda) => {
    if (nome != "" && qtd.length != 0) {
      const newProduct = { nome, qtd, marca, precoCusto, precoVenda };
      setProducts([...products, newProduct]);
      closeForm();
      setSnackbarMessage("Produto adicionado com sucesso!");
      setVisibleSnackbar(true);
    }
  };

  const findProduct = (product) => {
    const index = products.findIndex((prod) => prod.nome === product.nome);
    setIndexProduct(index);
  };

  const updateProduct = (nome, marca, qtd, precoCusto, precoVenda) => {
    const updatedProduct = { nome, marca, qtd, precoCusto, precoVenda };
    const updatedProducts = [...products];
    updatedProducts[indexProduct] = updatedProduct;
    setProducts(updatedProducts);
    setSnackbarMessage("Produto editado com sucesso!");
    setVisibleSnackbar(true);
  };

  const removeProduct = (products) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product.nome !== products[indexProduct].nome);
    });
    setSnackbarMessage("Produto apagado com sucesso!");
    setVisibleSnackbar(true);
  };

  const reportProduct = () => {
    let qtdTotal = 0;
    let custoTotal = 0;
    let lucroPrevisto = 0;
    let lucroVenda = 0;
    products.forEach((product) => {
      qtdTotal += parseInt(product.qtd, 10);
      custoTotal += (parseFloat(product.precoCusto) * parseInt(product.qtd));
      lucroPrevisto += (((parseFloat(product.precoVenda)) - (parseFloat(product.precoCusto))) * parseInt(product.qtd))
      lucroVenda += (lucroPrevisto / parseInt(product.qtd))
    });
    setReportValues({ ...reportValues, qtdTotal: qtdTotal, custoTotal: custoTotal, lucroPrevisto: lucroPrevisto, lucroVenda: lucroVenda });

  }
  const contextoProduto = {
    form,
    openForm,
    closeForm,
    products,
    addProduct,
    findProduct,
    indexProduct,
    updateProduct,
    removeProduct,
    reportProduct,
    reportValues,
    visibleSnackbar,
    snackbarMessage,
    setVisibleSnackbar
  };
  return (
    <ProductsContext.Provider value={contextoProduto}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
export { ProductsContext };
