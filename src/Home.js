import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
return (
    <div className='home'>
        <div className='home_container'>
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/v2/KSD_PC_Hero_EN_2X._CB576823215_.jpg" 
            alt='home'
            />
        <div  className='home_row'>{/* product */}
            <Product
            id={1}
            title="The Lean Startup"
            price={521}
            image="https://m.media-amazon.com/images/I/51CTIr1bJxL._SY445_SX342_.jpg" 
            rating={5} />
            {/* product */}
            <Product
            id={2}
            title="Apple iPhone 15 Pro Max (256 GB) - Natural Titanium"
            price={164000}
            image="https://m.media-amazon.com/images/I/81dT7CUY6GL._SX569_.jpg" 
            rating={4}/>
        </div>

        <div  className='home_row'>{/* product */}
            <Product
            id={3}
            title="Cyberpunk 2077 (2 Discs)"
            price={2069}
            image="https://m.media-amazon.com/images/I/81iR0aGNJ5L._SX342_.jpg" 
            rating={3}  />
            {/* product */}
            <Product
            id={4}
            title="ASUS TUF Gaming F15 i5-10300H GTX 1650"
            price={54000}
            image="https://m.media-amazon.com/images/I/710NRdecQtL._SY450_.jpg" 
            rating={4}  />
            {/* product */}
            <Product
            id={5}
            title="Samsung Galaxy Buds Live Earbuds "
            price={4699}
            image="https://m.media-amazon.com/images/I/61zjzpk46sL._SY355_.jpg" 
            rating={4}  />
        </div>

        <div  className='home_row'>{/* product */}
            <Product
            id={6}
            title="LG 45In Ultragear™ OLED Gaming Monitor"
            price={167999}
            image="https://m.media-amazon.com/images/I/71U39pazQqL._SY450_.jpg" 
            rating={5}  />
        </div>
    
        </div>
    </div>
)
}

export default Home