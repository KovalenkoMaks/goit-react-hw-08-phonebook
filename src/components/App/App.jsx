import { Filter } from 'components/Filter/Filter';
import { NameInput } from 'components/NameInput/NameInput';
import { Contacts } from 'components/Contacts/Contacts';

import { Wrapper } from './app.styled';

export const App = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <NameInput />
      <Filter />
      <Contacts />
    </Wrapper>
  );
};
