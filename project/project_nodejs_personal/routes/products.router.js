const express = require('express');
const router = express.Router();
const Products = require('../schemas/products.schema.js');

const data = [
  {
    _id: '652b6606234d72a8d2555e29',
    title: '아이폰15 MAX',
    author: '판매자',
    status: 'FOR_SALE',
    createdAt: '2023-10-15T04:09:42.059Z',
  },
  {
    _id: '652b619597690183899d2f74',
    title: '아이폰15 MAX 수정됨',
    author: '판매자',
    status: 'SOLD_OUT',
    createdAt: '2023-10-15T03:50:45.866Z',
  },
];

// 장터 목록조회
router.get('/products', (req, res) => {
  res.send({ data: data });
});

router.get('/products/:productId', async (req, res) => {
  const { productId } = req.params;

  const [result] = data.filter(datas => productId === datas._id);

  res.status(200).json({ data: result });
});

router.post('/products', async (req, res) => {
  const { title, content, author, password } = req.body;

  const products = await Products.find({ password });

  if (products.length) {
    return res.status(400).json({ errorMessage: '데이터 형식이 올바르지 않습니다.' });
  }

  const createdProducts = await Products.create({ title, content, author, password });

  res.status(200).json({ errorMessage: '판매 상품을 등록하였습니다.' });
});
// 해당 goods.js를 module화(modularize) 하고 해당 javascript파일을 router로써 사용하기 위함(app.js와 같은 여러 곳에서 사용 가능)
module.exports = router;
