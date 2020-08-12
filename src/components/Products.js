import React from 'react';

function Products(props) {
    var { children } = props;
    return (
        <div>
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {children}
                </div>
            </section>
        </div>
    );
}

export default Products;
