var initialState = [
    {
        id: 1,
        name: 'iphone 11',
        image: 'https://www.xtmobile.vn/vnt_upload/product/08_2019/thumbs/(600x600)_crop_iphone-11-64gb-xtmobile.jpg',
        description: 'Sản phầm của apple',
        price: 500,
        inventory: 10,
    },
    {
        id: 2,
        name: 'iphone 11 pro',
        image: 'https://didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/i/p/iphone-11-pro-max-den-didongviet_1_6.jpg',
        description: 'Sản phầm của apple',
        price: 600,
        inventory: 9,
    },
    {
        id: 3,
        name: 'iphone 11 pro max',
        image: 'https://didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/i/p/iphone-11-pro-max-den-didongviet_1_6.jpg',
        description: 'Sản phầm của apple',
        price: 750,
        inventory: 7,
    },
    {
        id: 4,
        name: 'legendary phone',
        image: 'https://alofone.vn/wp-content/uploads/2019/06/product-500x500.jpeg',
        description: 'Món quà của tạo hoá',
        price: 10000,
        inventory: 1,
    }
];
const products = (state = initialState, action) => {
    switch ((action.type)) {
        default: return [...state];
    }
};
export default products;