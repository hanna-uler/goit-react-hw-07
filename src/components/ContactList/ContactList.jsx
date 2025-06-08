import Contact from '../Contact/Contact';
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const query = useSelector(selectNameFilter);
    const visibleContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(query.toLowerCase()))
    return (
        <ul className={css.container}>
            {visibleContacts.map((contact) => {
                return <li className={css.contactItem}
                    key={contact.id}>
                    <Contact name={contact.name} number={contact.number} id={contact.id} />
                </li>;
            })}
        </ul>
    )
}
