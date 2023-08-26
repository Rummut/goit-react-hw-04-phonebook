import { Button, Item, List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <List>
        {contacts.map(contact => (
          <>
            <Item key={contact.id}>
              {contact.name}: {contact.number}
              <Button
                type="button"
                onClick={() => {
                  onDelete(contact.id);
                }}
              >
                Delete
              </Button>
            </Item>
          </>
        ))}
      </List>
    </>
  );
};
