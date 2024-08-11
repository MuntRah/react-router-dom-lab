import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <>
      <h2>Mailbox List</h2>

      <ul>
        {props.mailbox.map((currentMailbox) => (
          <li key={currentMailbox._id}>
            <Link to={`/mailbox/${currentMailbox._id}`}>
              {currentMailbox.boxHolder}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
