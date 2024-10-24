import './ErrorPage.css';
import { useParams } from 'react-router-dom';

function ErrorPage({error}) {
const { code } = useParams();

const errorCode = error || code

    return (
        <section>
            <h2>{`We are so sorry, there's been a ${errorCode} error! Please try again later.`}</h2>
        </section>
    );
}

export default ErrorPage;