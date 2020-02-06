import React, { Component} from 'react';
import Product from './Product';
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from '../context';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: storeProducts,
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                       <Title name={'Our'} title={'Products'}/>
                    </div>
                    <div className='row'>
                        <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product} />;
                                });
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;
