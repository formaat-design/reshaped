import React from 'react';
import { Theme } from 'arcade';
import s from './variables.module.css';

type Props = { children?: React.ReactNode };

const ThemeScope = (props: Props) => (
	<Theme lightClassName={s.light} darkClassName={s.dark}>
		{ props.children }
	</Theme>
);

ThemeScope.lightClassName = s.light;
ThemeScope.darkClassName = s.dark;

export default ThemeScope;
