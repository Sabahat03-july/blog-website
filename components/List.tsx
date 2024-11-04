import Link from 'next/link';
import getFormattedDate from '../lib/getFormattedDate';

const ListItem = ({ post }) => {
    const { id, title, date } = post;
    const formattedDate = getFormattedDate(date);

    return (
        <li>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small>{formattedDate}</small>
        </li>
    );
};

export default ListItem;
