import { ReactNode } from "react";
import { IPosts } from "./posts.types";

export interface IChildren {
	children: ReactNode
}

// export interface PostData {
// 	text: string;
// 	_id: number;
// 	title: string;
// 	imageUrl: string;
// 	price: number;
// }

export type Order = 'asc' | 'desc';

export interface EnhancedTableToolbarProps {
	numSelected: number;
}

export interface HeadCell {
	disablePadding: boolean;
	id: keyof IPosts;
	label: string;
	numeric: boolean;
  }

export interface EnhancedTableProps {
	numSelected: number;
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IPosts) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
  }