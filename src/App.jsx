import Gallery from './components/Gallery';     // import by default
import { Profile } from './components/Gallery'; // import by name 
import List from './components/List';
import AvatarList from './components/AvatarList';
import './App.css'

export default function App(){
  return(
    <>
    <Gallery />
    <Profile />
    <List />
    <AvatarList />
    </>
  );
}