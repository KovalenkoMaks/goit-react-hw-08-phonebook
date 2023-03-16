import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { NameInput } from 'components/NameInput/NameInput';

function ContactsPage() {
  return (
    <>
      <NameInput />
      <Filter />
      <Contacts />
    </>
  );
}

export { ContactsPage };
