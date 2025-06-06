import css from './SearchBox.module.css'
import { LuUserRoundSearch } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
    const query = useSelector((state) => state.filters.name);
    const dispatch = useDispatch();

    return (
        <div className={css.container}>
            <label htmlFor='searchInput'><LuUserRoundSearch className={css.icon} size="1.5rem"/>Find contacts by name</label>
            <input
                className={css.input}
                type='text'
                id='searchInput'
                value={query}
                onChange={(evt)=> dispatch(changeFilter(evt.target.value))}
            />
        </div>
    )
    
}

// import { useSelector, useDispatch } from "react-redux";
// import { setFilter } from "";

// const dispatch = useDispatch();
// const storedQuery = useSelector((state) => state.filter.query); - just for using in a CONTROLLED search input
// const handleQueryChange = newQuery => dispatch(setFilter(newQuery));
