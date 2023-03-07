import { ReactNode } from "react";

export interface IChildren {
	children: ReactNode
}

export interface PostData {
	text: string;
	id: number;
	title: string;
	image: string;
}

export type Order = 'asc' | 'desc';

export interface EnhancedTableToolbarProps {
	numSelected: number;
}

export interface HeadCell {
	disablePadding: boolean;
	id: keyof PostData;
	label: string;
	numeric: boolean;
  }

export interface EnhancedTableProps {
	numSelected: number;
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof PostData) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: string;
	rowCount: number;
  }