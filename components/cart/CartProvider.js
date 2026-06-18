'use client';

import {
    createContext,
    useEffect,
    useState
} from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const [open, setOpen] = useState(false);


    useEffect(() => {

        const saved = localStorage.getItem('cart');

        if (saved) {
            setCart(JSON.parse(saved));
        }

    }, []);



    useEffect(() => {

        localStorage.setItem(
            'cart',
            JSON.stringify(cart)
        );

    }, [cart]);



    const addItem = (item) => {

        setCart(prev => {

            const exists = prev.find(
                i => i.slug === item.slug
            );


            if (exists) {

                return prev.map(i =>

                    i.slug === item.slug

                        ? {
                            ...i,
                            quantity: i.quantity + 1
                        }

                        : i

                );
            }


            return [

                ...prev,

                {
                    ...item,
                    quantity: 1
                }

            ];
        });
    };




    const removeItem = slug => {

        setCart(

            prev => prev.filter(

                i => i.slug !== slug
            )

        );
    };



    const increase = slug => {

        setCart(

            prev => prev.map(

                i =>

                    i.slug === slug

                        ? {
                            ...i,
                            quantity: i.quantity + 1
                        }

                        : i
            )
        );
    };



    const decrease = slug => {


        setCart(prev =>

            prev.flatMap(item => {


                if (item.slug !== slug)
                    return item;



                if (item.quantity <= 1)
                    return [];



                return {

                    ...item,
                    quantity:
                        item.quantity - 1
                };


            })

        );

    };





    const totalPrice = cart.reduce(

        (sum, item) =>

            sum +

            item.price * item.quantity

        ,

        0

    );



    const totalItems = cart.reduce(

        (sum, item) =>

            sum + item.quantity

        ,

        0
    );





    return (

        <CartContext.Provider


            value={{

                cart,

                addItem,

                removeItem,

                increase,

                decrease,

                totalItems,

                totalPrice,

                open,

                setOpen

            }}

        >


            {children}


        </CartContext.Provider>

    );
}
