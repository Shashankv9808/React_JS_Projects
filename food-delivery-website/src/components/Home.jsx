import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../css/Home.css'
import { PopularCategories } from "./PopularCategories"
export const Home = () => {
    const dataList = [
        { id: 1, discount: 40, restaurantName: "Vegan Vogue Indiranagar", type: "Vegan", imageURL: "./src/asset/vegan1.jpg" },
        { id: 2, discount: 20, restaurantName: "Grand Ai Cafe London", type: "Vegan", imageURL: "./src/asset/vegan2.jpg" },
        { id: 3, discount: 50, restaurantName: "Butterbrot Café London", type: "Vegan", imageURL: "./src/asset/vegan3.jpg" },
        { id: 4, discount: 38, restaurantName: "Daily Sushi Jayanagar", type: "Sushi", imageURL: "./src/asset/sushi1.jpg" },
        { id: 5, discount: 62, restaurantName: "Harima Japanese Restaurant", type: "Sushi", imageURL: "./src/asset/sushi2.jpg" },
        { id: 6, discount: 16, restaurantName: "Shokudo Café London", type: "Sushi", imageURL: "./src/asset/sushi3.jpg" },
        { id: 7, discount: 46, restaurantName: "McDonald's Burgers London", type: "Fastfood", imageURL: "./src/asset/fastfood1.jpg" },
        { id: 8, discount: 40, restaurantName: "Chef Burgers London", type: "Fastfood", imageURL: "./src/asset/fastfood2.jpg" },
        { id: 9, discount: 12, restaurantName: "Burger Seigneur", type: "Fastfood", imageURL: "./src/asset/fastfood3.png" },
        { id: 10, discount: 23, restaurantName: "Chef Burgers London", type: "Others", imageURL: "./src/asset/others1.jpg" },
        { id: 11, discount: 34, restaurantName: "Grand Ai Cafe London", type: "Others", imageURL: "./src/asset/others2.jpg" },
        { id: 12, discount: 51, restaurantName: "Butterbrot Café London", type: "Others", imageURL: "./src/asset/others3.jpg" },
    ];
    const categories = [
        { name: "Burgers & Fast food", restaurants: 21, img: "./src/asset/fastfood1.jpg" },
        { name: "Salads", restaurants: 32, img: "./src/asset/chef-salad.png" },
        { name: "Pasta & Casuals", restaurants: 4, img: "./src/asset/others2.jpg" },
        { name: "Pizza", restaurants: 32, img: "./src/asset/fastfood2.jpg" },
        { name: "Breakfast", restaurants: 4, img: "./src/asset/fastfood3.png" },
        { name: "Soups", restaurants: 32, img: "./src/asset/soup.jpg" },
    ];

    const restaurants = [
        { name: "McDonald’s", img: "./src/asset/mcd.jpg" },
        { name: "Papa Johns", img: "./src/asset/pj.jpg" },
        { name: "KFC", img: "./src/asset/kfc.jpg" },
        { name: "Texas Chicken", img: "./src/asset/tc.jpg" },
        { name: "Burger King", img: "./src/asset/bk.jpg" },
        { name: "Shaurma 1", img: "./src/asset/s1.jpg" },
    ];
    const [activeSectionFoodDeals, setFood] = useState('Fastfood');
    return (
        <>
            <img src="./src/asset/banner.png" alt='banner' />

            <div className='deals-container'>
                <div className='textheader'>
                    <h1>Up to -40% 🎊 Order.uk exclusive deals</h1>
                    <ul className='food-type-nav'>
                        <li className={activeSectionFoodDeals === 'Vegan' ? "linkbutton active" : "linkbutton"} onClick={() => setFood('Vegan')}>Vegan</li>
                        <li className={activeSectionFoodDeals === 'Sushi' ? "linkbutton active" : "linkbutton"} onClick={() => setFood('Sushi')}>Sushi</li>
                        <li className={activeSectionFoodDeals === 'Fastfood' ? "linkbutton active" : "linkbutton"} onClick={() => setFood('Fastfood')}>Pizza & Fast food</li>
                        <li className={activeSectionFoodDeals === 'Others' ? "linkbutton active" : "linkbutton"} onClick={() => setFood('Others')}>Others</li>
                    </ul>
                </div>
                <div className="banner-container">
                    {dataList.map((data) => data.type === activeSectionFoodDeals ?
                        <div key={data.id} className="banner">
                            <img src={data.imageURL} alt="dish image" />
                            <div className="discount-label">-{data.discount}%</div>
                            <div className="info">
                                <div className="restaurant">Restaurant</div>
                                <div className="name">{data.restaurantName}</div>
                            </div>
                        </div> : <></>
                    )}

                </div>
                <h1 className="title">Order.uk Popular Categories <span className="emoji">😋</span></h1>
                <PopularCategories categories={categories} type={"Categories"} />
                <h1 className="title">Popular Restaurants <span className="emoji">🛎️</span></h1>
                <PopularCategories categories={restaurants} type={"Restaurants"} />
                <img src="./src/asset/mobile-app-image.png" alt='mobile app banner' style={{display:"flex",width:"100%", marginTop:"30px",marginBottom:"30px"}} />
            </div >
        </>
    )
}
