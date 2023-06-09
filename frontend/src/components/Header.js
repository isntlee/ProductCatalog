import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from 'material-ui-search-bar';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
}));

function Header() {
	const classes = useStyles();
	let history = useHistory();
	const [data, setData] = useState({ search: '' });

	const goSearch = (e) => {
		history.push({
			pathname: '/search/',
			search: '?search=' + data.search,
		});
		window.location.reload();
	};
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="static"
				color="inherit"
				elevation={0}
				className={classes.appBar}
			>
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
					Blaxploitation
					</Typography>

					<SearchBar
						value={data.search}
						onChange={(newValue) => setData({ search: newValue })}
						onRequestSearch={() => goSearch(data.search)}
					/>
					<Button
						href={'/bread'}
						variant="contained"
						color="primary"
					>
						Add, Edit & Delete
					</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Header;