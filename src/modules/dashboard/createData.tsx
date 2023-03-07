import { PostData } from "../common/types/common.types";

function createData(
	text: string,
	id: number,
	title: string,
	image: string,
  ): PostData {
	return {
	  text,
	  id,
	  title,
	  image,
	};
  }
  
 const rows = [
	createData('Shirt lorem ipsum dolorlorem ipsum ', 1, 'Shirtt', '/hgg'),
	createData('Shirt loremlorem ipsum ipsum dolor', 2, 'Shirtr', '/hgg'),
	createData('Shirlorem ipsumt lorem ipsum dolor', 3, 'Shirtd', '/hgg'),
	createData('Shirt lorem ipsum dolor', 4, 'Shirtv ', '/hgg'),
	createData('Shirt lolorem ipsumrem ipsum dolor', 5, 'Shirtcx', '/hgg'),
	createData('Shirt lorem ipsum lorem ipsum dolor', 6, 'Shirtxt', '/hgg'),
	createData('Shirt lorem ipsum dolorlorem ipsumlorem ipsum', 7, 'Syhirt', '/hgg'),
	createData('lorem ipsum Shirt lorem ipsum dolor', 8, 'yuShirt', '/hgg'),
	createData('Shirt lorem lorem ipsumlorem ipsumipsum dolor', 9, 'zShirt', '/hgg'),
	createData('Shirt lorem ipsum dolor', 10, 'nhShirt', '/hgg'),
	createData('Shirt lolorem ipsumrem ipsum dolor', 11, 'Sbhvhirt', '/hgg'),
	createData('Shirt llorem ipsumlorem ipsumorem ipsum dolor', 12, 'Srrhirt', '/hgg'),
	createData('Shirt llorem ipsumorem ipsum dolor', 13, 'Shvgirt', '/hgg'),
   
  ];

  export default rows