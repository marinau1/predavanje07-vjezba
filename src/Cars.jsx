import Car from "./Car";

const Cars = ({ cars }) => {

    return (
        <div>
            {
                cars.map((car) => {
                    return <Car brand = {car.brand} model={car.model} />
                })
            }
        </div>
    );
}

export default Cars;
