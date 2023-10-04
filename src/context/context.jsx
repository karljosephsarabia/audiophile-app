import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext();

const MyProvider = (props) => {
    const [data, setData] = useState([]);
    const [mountData, setMountData] = useState('true');


    //Setting up navigation menu array
    const [menuNav, setMenuNav] = useState([
        {
            title: 'home',
            path: '/'
        }, {
            title: 'headphones',
            path: '/headphones',
            categoryImage: 'assets/shared/desktop/image-category-thumbnail-headphones.png'
        }, {
            title: 'speakers',
            path: '/speakers',
            categoryImage: 'assets/shared/desktop/image-category-thumbnail-speakers.png'
        }, {
            title: 'earphones',
            path: '/earphones',
            categoryImage: 'assets/shared/desktop/image-category-thumbnail-earphones.png'
        }, {
            title: '404 Page Not Found',
            path: '*'
        }]);

    //Getting json data using axios
    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios.get('https://raw.githubusercontent.com/karljosephsarabia/audiophile-app/main/public/data.json');

                if (mountData) {
                    setData(data);
                    setMountData(false);
                }
            } catch (error) {
                console.error(error);
            }
        }

        getData();
    });

    return (
        <>
            <Context.Provider value={{ menuNav, setMenuNav, data }}>
                {props.children}
            </Context.Provider>
        </>
    );
};

export default MyProvider;