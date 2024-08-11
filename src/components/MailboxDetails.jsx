import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const singleMailbox = props.mailbox.find(
    (box) => box._id === Number(mailboxId)
  );

  if (!singleMailbox) {
    return <h2>Mailbox not found</h2>;
  }

  return (
    <>
      <h2>{singleMailbox.boxHolder}</h2>
      <h3>Details :</h3>
      <p>Box holder: {singleMailbox.boxHolder}</p>
      <p>Box size: {singleMailbox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;
