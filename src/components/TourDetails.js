import { useParams } from "react-router-dom";

const TourDetails = () => {
    const { id } = useParams();

    return (
        <div>
            This is tour number {id}
        </div>
    );
}

export default TourDetails;