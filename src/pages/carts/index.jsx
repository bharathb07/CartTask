import { useContext, useState } from "react";
import ContextAPI from "../../contextAPI";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

const CartDetails = () => {
    const history = useNavigate();
    const { cartData, setCartData, counter, setCounter } = useContext(ContextAPI);
    const [price, setPrice] = useState(cartData?.price);

    //increment function...
    const incrementCounter = (value) => {
        setCounter(counter + 1);
        setPrice(price + value)

    };

    //decrement function...
    const decrementCounter = (value) => {
        if (counter !== 1) {
            setCounter(counter - 1);
            setPrice(price - value)
        }
    };


    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className=" rounded overflow-hidden shadow-lg">
                        <img className="w-full h-[600px]" src={cartData?.imageURL} alt="Sunset in the mountains" />
                    </div>
                </div>
                <div className="m-4">
                    <div className="font-bold text-xl mb-2">{cartData?.title}</div>
                    <p class="text-gray-700 text-base">
                        {cartData?.description}
                    </p>

                    <div className="flex py-10">
                        <div className="w-1/2 font-bold text-xl mb-2">
                            ${price?.toFixed(2)}
                        </div>
                        <div className="w-1/2">
                            <form className="max-w-xs mx-auto">
                                <div className="relative flex items-center max-w-[8rem]">
                                    <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" onClick={() => {
                                        decrementCounter(cartData?.price)
                                    }}>
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                        </svg>
                                    </button>
                                    <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={counter} />
                                    <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" onClick={() => {
                                        incrementCounter(cartData?.price)
                                    }}>
                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="py-5">

                        {/* Form functionality */}
                        <Formik initialValues={{ fullname: "", email: "", city: "" }}
                            validate={(values) => {
                                const errors = {};
                                if (!values.fullname) {
                                    errors.fullname = "name is required";
                                }

                                if (!values.email) {
                                    errors.email = "email is required";
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = "Invalid email address";
                                }
                                if (!values.fullname) {
                                    errors.city = "City is required";
                                }

                                return errors;
                            }}

                            onSubmit={(values, { setSubmitting }) => {
                                const finalData = {
                                    "userId": 1,
                                    "productId": cartData?.productId,
                                    "quantity": counter,
                                    "price": price,
                                    values
                                }

                                console.log(finalData, "values");
                                setCartData(null);
                                setCounter(1);
                                history('/');


                            }}>
                            {({ isSubmitting }) => (
                                <Form>
                                    <div>
                                        <label>Name:</label>
                                        <Field
                                            type="text"
                                            name="fullname"
                                            placeholder="Enter your fullname"
                                            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:bg-white'
                                        />
                                        <ErrorMessage name="fullname" component="div" />
                                    </div>

                                    <div>
                                        <label>Email:</label>

                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Enter email address"
                                            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:bg-white'
                                        />
                                        <ErrorMessage name="email" component="div" />
                                    </div>
                                    <div>
                                        <label>City:</label>

                                        <Field
                                            type="city"
                                            name="city"
                                            placeholder="Enter your city"
                                            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:bg-white'
                                        />
                                        <ErrorMessage name="city" component="div" />
                                    </div>

                                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => {
                                        // AddCart(values)
                                    }}>
                                        <span>Place Order</span>
                                    </button>
                                </Form>
                            )}
                        </Formik>



                    </div>
                </div>
            </div>

        </div>

    );
}

export default CartDetails;