import { useContext } from "react";
import Card from "./Card";
import { HttpHerosContext } from "../providers/Context";

const Lists = () => {
    const { heroList } = useContext(HttpHerosContext);

    console.log(heroList);

    return (
        <div className="Hero-List">
            {heroList?.results?.map(({ id, name, status, image }) => (
                <Card key={id} className="Hero-Card">
                    <div>
                        <p>{name}</p>
                        <p>{status}</p>
                    </div>
                    <img src={image} />
                </Card>
            ))}
        </div>
    );
};

export default Lists;
