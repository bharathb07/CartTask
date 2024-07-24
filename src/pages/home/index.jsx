import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ContextAPI from "../../contextAPI";

const Home = () => {
    const history = useNavigate()
    const { data, setData, setCartData } = useContext(ContextAPI)
 
    //trigger for product list...
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))

    }, []);


    //function for add cart...
    const AddCart = async (values) => {
        try {
            const postData = {
                "productId": values?.id,
                "quantity": 1,
                "title": values?.title,
                "imageURL": values?.image,
                "description": values?.description,
                "price": values?.price
            }
            setCartData(postData)
            history('/cart');

        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="grid grid-cols-4 gap-4">
            {data?.map((values) => {
                return (
                    <div className=" rounded overflow-hidden shadow-lg">
                        <img className="w-full h-[300px]" src={values?.image} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 truncate">{values?.title}</div>
                            <div className="flex">
                                <div className="w-1/2">
                                    ${values?.price}
                                </div>
                            </div>

                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => {
                                AddCart(values)
                            }}>
                                <span>Add Cart</span>
                            </button>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default Home;