import { people } from '../data';
import { getImageUrl } from '../utils';

export default function AdvancedList() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  
  return(
    <>
    <h2>AvatarList</h2>
    <ul className="avatar-list">{listItems}</ul>
    </>
  );
}