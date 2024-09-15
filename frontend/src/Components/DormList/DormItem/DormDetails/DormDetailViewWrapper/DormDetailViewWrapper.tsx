import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DormDetails from '../DormDetails';

const DormDetailViewWrapper = () => {
    // useParams will extract 'dormName' from the URL
    const { dormName } = useParams<{ dormName: string }>();

    useEffect(() => {
        console.log({ dormName });
    }, [dormName]);

    return <DormDetails dormName={dormName} />;
};

export default DormDetailViewWrapper;
