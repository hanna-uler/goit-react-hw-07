import Contact from '../Contact/Contact';
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';


export default function ContactList() {
    const contacts = useSelector((state) => state.contacts.items);
    const query = useSelector((state) => state.filters.name);
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
