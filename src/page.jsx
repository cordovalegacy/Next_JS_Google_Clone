import { getSession } from 'next-auth/react';

const getServerSideProps = async(context) => {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
}

export default getServerSideProps