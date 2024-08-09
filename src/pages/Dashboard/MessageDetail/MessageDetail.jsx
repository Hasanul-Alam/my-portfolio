import { useLoaderData } from "react-router-dom";


const MessageDetail = () => {
    const {_id} = useLoaderData();
    // Next task is message loading.
    return (
        <div>
            <h2>This is message detail page.</h2>
        </div>
    );
};

export default MessageDetail;