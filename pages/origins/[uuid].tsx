import OriginTemplate from '../../components/templates/origin-template'
import { useRouter } from 'next/router'; 

const Origin = props => {
    const router = useRouter();

    return (
        <OriginTemplate uuid = {router.query.uuid} />    
    );
}

export default Origin;