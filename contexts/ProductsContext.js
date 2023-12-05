import { createContext, useState, useEffect } from 'react';
import {
  listProducts,
  incluirProduto,
  editarProduto,
  listarPeloId,
  deletarProduto
} from '../service/MobileService';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [snackbarMessage, setSnackbarMessage] = useState(''); //SNACKBAR
  const [visibleSnackbar, setVisibleSnackbar] = useState(false); //SNACKBAR
  const [products, setProducts] = useState([]);
  const [indexProduct, setIndexProduct] = useState();
  const [form, setForm] = useState(false);
  const [error, setError] = useState();
  const [reportValues, setReportValues] = useState({
    qtdTotal: 0,
    custoTotal: 0,
    lucroPrevisto: 0,
    lucroVenda: 0,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const getProducts = await listProducts();
        setProducts(getProducts);
      } catch (error) {
        console.error("Erro ao listar produtos:", error);
        setError(error);
      }
    };
    fetchProducts();
  }, []);

  const openForm = () => {
    setForm(true);
  };
  const closeForm = () => {
    setForm(false);
  };


  const addProduct = async (nome, qtd, marca, precoCusto, precoVenda) => {
    const errorMessage = 'Preencha todos os dados corretamente.';

    if (
      !nome ||
      isNaN(qtd) ||
      qtd <= 0 ||
      isNaN(precoCusto) ||
      precoCusto <= 0 ||
      isNaN(precoVenda) ||
      precoVenda <= 0
    ) {
      setError(errorMessage);
      return;
    }
    try {
      const newProduct = await incluirProduto(
        nome,
        qtd,
        marca,
        precoCusto,
        precoVenda
      );
      setProducts([...products, newProduct]);
      closeForm();
      setSnackbarMessage('Produto adicionado com sucesso!');
      setVisibleSnackbar(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const findProduct = (product) => {
    const index = products.findIndex((prod) => prod.nome === product.nome);
    setIndexProduct(index);
  };

  const buscar = async (id) => {
    try {
      return await listarPeloId(id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateProduct = (id, nome, marca, qtd, precoCusto, precoVenda) => {
    const errorMessage = 'Preencha todos os dados corretamente.';

    if (
      !nome ||
      isNaN(qtd) ||
      qtd <= 0 ||
      isNaN(precoCusto) ||
      precoCusto <= 0 ||
      isNaN(precoVenda) ||
      precoVenda <= 0
    ) {
      setError(errorMessage);
      return;
    }
    try {
      const updatedProduct = { id, nome, marca, qtd, precoCusto, precoVenda };
      const updatedProducts = [...products];
      editarProduto(id, updatedProduct)
      updatedProducts[indexProduct] = updatedProduct;
      setProducts(updatedProducts);
      setSnackbarMessage('Produto editado com sucesso!');
      setVisibleSnackbar(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeProduct = (products) => {
    const filteredProducts = products.filter(
      (product) => product.id !== products[indexProduct].id
    );
    
    setProducts(filteredProducts);
    deletarProduto(products[indexProduct].id)
    setSnackbarMessage('Produto apagado com sucesso!');
    setVisibleSnackbar(true);
  };

  const reportProduct = () => {
    let qtdTotal = 0;
    let custoTotal = 0;
    let lucroPrevisto = 0;
    let lucroVenda = 0;
    products.forEach((product) => {
      qtdTotal += parseInt(product.qtd, 10);
      custoTotal += parseFloat(product.precoCusto) * parseInt(product.qtd);
      lucroPrevisto +=
        (parseFloat(product.precoVenda) - parseFloat(product.precoCusto)) *
        parseInt(product.qtd);
      lucroVenda += lucroPrevisto / parseInt(product.qtd);
    });
    setReportValues({
      ...reportValues,
      qtdTotal: qtdTotal,
      custoTotal: custoTotal,
      lucroPrevisto: lucroPrevisto,
      lucroVenda: lucroVenda,
    });
  };
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
    setVisibleSnackbar,
    buscar,
    error,
  };
  return (
    <ProductsContext.Provider value={contextoProduto}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
export { ProductsContext };
