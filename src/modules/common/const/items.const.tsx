import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PersonIcon from '@mui/icons-material/Person';
import { KEYS } from './app-keys.const';

export const MENU_ITEMS_MAIN = [
	{
		text:'Dashboard',
		path: KEYS.DASHBOARD,
		icon:<CollectionsBookmarkIcon />
	}, 
	{
		text:'Create Post',
		path: KEYS.CREATE,
		icon:<AddToPhotosIcon/>
	}, 
	{
		text:'User',
		path: KEYS.USER,
		icon:<PersonIcon/>
	}
]
export const MENU_ITEMS_SECOND = [
	{
		text:'Setings',
		path: KEYS.SETTINGS,
		icon:<SettingsApplicationsIcon/>
	}
]