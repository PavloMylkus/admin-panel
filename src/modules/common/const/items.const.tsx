import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PersonIcon from '@mui/icons-material/Person';

export const MENU_ITEMS_MAIN = [
	{
		text:'Dashboard',
		path: "/dashboard",
		icon:<CollectionsBookmarkIcon/>
	}, 
	{
		text:'Create Post',
		path: "/add-post",
		icon:<AddToPhotosIcon/>
	}, 
	{
		text:'User',
		path: "/user",
		icon:<PersonIcon/>
	}
]
export const MENU_ITEMS_SECOND = [
	{
		text:'Setings',
		path: "/setings",
		icon:<SettingsApplicationsIcon/>
	}
]