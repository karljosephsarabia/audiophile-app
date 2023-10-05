import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <section className="container px-5 mx-auto">
                <div className="text-gray-400 font-semibold mt-5 text-start lg:mt-productDetailTitle lg:text-clampStatus">
                    <button onClick={() => navigate(-1)}>Go Back</button>
                </div>
            </section >
        </>
    );
};

export default BackButton;