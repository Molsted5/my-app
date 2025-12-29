import './App.css'
import Gallery from './components/Gallery';     // import by default
import { Profile } from './components/Gallery'; // import by name 
import List from './components/List';
import AvatarList from './components/AvatarList';
import Toolbar from './components/Toolbar';
import SculptureGallery from './components/SculptureGallery'

export default function App(){
  return(
    <>
    {/*<Gallery />
    <Profile />
    <List />
    <Toolbar />*/}
    <AvatarList />
    <SculptureGallery />
    </>
  );
}